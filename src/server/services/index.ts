import { type InputJsonObject } from "@prisma/client/runtime/library";

import { db } from "@/server/db";

const SIX_HOURS_IN_MS = 6 * 60 * 60 * 1000;

export interface CachedResponse<T> {
  response: T;
  cacheId: string;
  requestHash: string;
  createdAt: number;
  updatedAt: number;
  expiresAt: number;
  refetched: boolean;
}

export const cachedFetch = async <T>(
  host: string,
  version: string,
  headers: Record<string, string>,
  nonCachedHeaders: Record<string, string>,
  path: string,
  params: Record<string, string | string[]>,
): Promise<CachedResponse<T>> => {
  const url = new URL(`${host}/${version}/${path}`);

  const searchParams = new URLSearchParams({});
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key, v));
      return;
    } else {
      searchParams.append(key, value);
    }
  });
  url.search = searchParams.toString();

  // check if the response is cached & cache is valid
  const cacheRequestPath = url.toString();
  const cacheRequestHash = Buffer.from(
    JSON.stringify({
      path: cacheRequestPath,
      headers: headers,
      body: {},
    }),
  ).toString("base64");

  let refetched = false;
  let cacheResponse = await db.apiCache.findFirst({
    where: { requestHash: cacheRequestHash },
  });

  if (
    !cacheResponse ||
    cacheResponse.createdAt.getTime() + SIX_HOURS_IN_MS < Date.now()
  ) {
    try {
      const response = await fetch(url, {
        headers: { ...headers, ...nonCachedHeaders },
      });

      if (!response.ok) {
        console.log(await response.text(), url);
        throw new Error(`Failed to fetch ${path}`);
      }

      const cacheResponseBody = (await response.json()) as T;
      cacheResponse = await db.apiCache.create({
        data: {
          host: host,
          version: version,
          requestHash: cacheRequestHash,
          requestPath: cacheRequestPath,
          requestQuery: Object.fromEntries(searchParams.entries()),
          requestBody: {},
          requestHeaders: headers,
          responseBody: cacheResponseBody as InputJsonObject,
          responseHeaders: Object.fromEntries(response.headers.entries()),
        },
      });
      refetched = true;
    } catch (error) {
      console.error(`Error fetching ${path}`, error);
      throw error;
    }
  }

  console.log("Fetching request", refetched, cacheRequestPath); // TODO: remove

  return {
    response: cacheResponse.responseBody as T,
    cacheId: cacheResponse.id,
    requestHash: cacheRequestHash,
    createdAt: cacheResponse.createdAt.getTime(),
    updatedAt: cacheResponse.updatedAt.getTime(),
    expiresAt: cacheResponse.createdAt.getTime() + SIX_HOURS_IN_MS,
    refetched: refetched,
  };
};

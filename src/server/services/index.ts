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
  path: string,
  params: Record<string, string | string[]>,
): Promise<T> => {
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

  try {
    const response = await fetch(url, {
      headers: headers,
    });

    if (!response.ok) {
      console.log(await response.text(), url);
      throw new Error(`Failed to fetch ${path}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`Error fetching ${path}`, error);
    throw error;
  }
};

import { env } from "@/env";
import { cachedFetch } from "@/server/services";
import { type CongressResponse } from "@/server/services/congress/types";

export const cachedCongressFetch = async <T>(
  path: string,
  params: Record<string, string | string[]> = {},
) => cachedCongressFetchRaw<T>(getCongressApiUrl(path), params);

export const cachedCongressFetchRaw = async <T>(
  url: string,
  params: Record<string, string | string[]> = {},
): Promise<CongressResponse<T>> => {
  return cachedFetch<CongressResponse<T>>(
    url,
    params,
    {
      accept: "application/json",
    },
    {
      "x-api-key": env.GOV_API_KEY,
    },
  ).then((response) => response.response);
};

export const getCongressApiUrl = (path: string) =>
  `${env.CONGRESS_API_HOST}/${env.CONGRESS_API_VERSION}/${path}`;

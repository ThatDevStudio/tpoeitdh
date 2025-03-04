import { env } from "@/env";
import { cachedFetch } from "@/server/services";

export const cachedCongressFetch = async <T>(
  path: string,
  params: Record<string, string | string[]>,
): Promise<T> => {
  return cachedFetch<T>(
    env.CONGRESS_API_HOST,
    env.CONGRESS_API_VERSION,
    {
      accept: "application/json",
      "x-api-key": env.GOV_API_KEY,
    },
    path,
    params,
  );
};

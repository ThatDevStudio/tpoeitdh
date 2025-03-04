import { cachedCongressFetch } from "@/server/services/congress/api";
import { type Member } from "@/server/services/congress/types/member";

export const fetchMembers = async (): Promise<{ members: Member[] }> => {
  return cachedCongressFetch<{ members: Member[] }>("member", {
    format: "json",
    limit: "250",
    currentMember: "true",
  });
};

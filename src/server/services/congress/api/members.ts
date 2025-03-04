import { cachedCongressCollectionFetch } from "@/server/services/congress/api";
import { type Member } from "@/server/services/congress/types/member";

export const fetchCurrentMembers = async () => {
  return cachedCongressCollectionFetch<Member, { members: Member[] }>(
    "member",
    "members",
    { currentMember: "true" },
  );
};

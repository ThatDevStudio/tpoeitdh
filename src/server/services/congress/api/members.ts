import { cachedCongressFetch } from "@/server/services/congress/api";
import { type Member } from "@/server/services/congress/types/member";

export const fetchMembers = async () => {
  const members: Member[] = [];

  const response = await cachedCongressFetch<{ members: Member[] }>("member", {
    format: "json",
    limit: "250",
    currentMember: "true",
  });
  members.push(...response.members);

  // while (response.pagination.next) {
  //   response = await cachedCongressFetchRaw(response.pagination.next, {
  //     format: "json",
  //     limit: "250",
  //     currentMember: "true",
  //   });
  //   members.push(...response.members);
  // }

  return members;
};

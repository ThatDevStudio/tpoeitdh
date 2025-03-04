import { cachedCongressFetch } from "@/server/services/congress/api";
import { type Member } from "@/server/services/congress/types/member";

export const fetchMembers = async () => {
  const members: Member[] = [];

  while (true) {
    const response = await cachedCongressFetch<{ members: Member[] }>(
      "member",
      {
        format: "json",
        offset: members.length.toString(),
        limit: "250",
        currentMember: "true",
      },
    );
    members.push(...response.members);

    if (response.pagination.count == members.length) break;
  }
  return members;
};

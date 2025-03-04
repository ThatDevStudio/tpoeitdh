import { env } from "@/env";
import { type Member } from "@/server/services/congress/types/member";

export const fetchMembers = async (): Promise<{ members: Member[] }> => {
  try {
    const url = new URL(
      `${env.CONGRESS_API_HOST}/${env.CONGRESS_API_VERSION}/member`,
    );
    url.search = new URLSearchParams([
      ["format", "json"],
      ["limit", "250"],
      ["currentMember", "true"],
    ]).toString();

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "x-api-key": env.GOV_API_KEY,
      },
    });
    if (!response.ok) {
      console.log(await response.text(), url);
      throw new Error("Failed to fetch members");
    }
    return (await response.json()) as { members: Member[] };
  } catch (error) {
    console.error("Error fetching members", error);
    throw error;
  }
};

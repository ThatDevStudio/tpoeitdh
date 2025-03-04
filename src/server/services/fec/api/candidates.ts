import { env } from "@/env";
import { type Candidate } from "@/server/services/fec/types/candidate";
import { type PaginatedResponse } from "@/server/services/fec/types/pagination";

export const fetchCandidates = async (): Promise<
  PaginatedResponse<Candidate>
> => {
  try {
    const url = new URL(
      `${env.FEC_API_HOST}/${env.FEC_API_VERSION}/candidates`,
    );
    url.search = new URLSearchParams([
      ["is_active_candidate", "true"],
      ["candidate_status", "C"],
      ["per_page", "100"],
      ["incumbent_challenge", "I"],
      ["office", "H"],
      ["office", "S"],
    ]).toString();

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "x-api-key": env.GOV_API_KEY,
      },
    });
    if (!response.ok) {
      console.log(await response.text(), url);
      throw new Error("Failed to fetch candidates");
    }
    return (await response.json()) as PaginatedResponse<Candidate>;
  } catch (error) {
    console.error("Error fetching candidates", error);
    throw error;
  }
};

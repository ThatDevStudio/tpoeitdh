import { cachedFecFetch } from "@/server/services/fec/api";
import { type Candidate } from "@/server/services/fec/types/candidate";
import { type PaginatedResponse } from "@/server/services/fec/types/pagination";

export const fetchCandidates = async (): Promise<
  PaginatedResponse<Candidate>
> => {
  return cachedFecFetch("candidates", {
    is_active_candidate: "true",
    candidate_status: "C",
    per_page: "100",
    incumbent_challenge: "I",
    office: ["H", "S"],
  });
};

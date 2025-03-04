import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { fetchCandidates } from "@/server/services/fec/api/candidates";

export const FecCandidatesRouter = createTRPCRouter({
  fetch: publicProcedure
    .meta({ description: "Fetch all candidates" })
    .query(async ({ ctx, input }) => {
      return fetchCandidates();
    }),
});

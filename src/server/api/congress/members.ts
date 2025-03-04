import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { fetchMembers } from "@/server/services/congress/api/members";

export const CongressMembersRouter = createTRPCRouter({
  fetch: publicProcedure
    .meta({ description: "Fetch all members" })
    .query(async ({ ctx, input }) => {
      return fetchMembers();
    }),
});

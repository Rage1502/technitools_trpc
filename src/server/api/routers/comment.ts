import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const commentRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.comment.findMany();
  }
    ),
  create: publicProcedure
  .input(
    z.object({
      userName: z.string(),
      content: z.string(),
    }),
  )
  .mutation(({ ctx, input }) => {
    return ctx.prisma.comment.create({ data: input });
  }),
});
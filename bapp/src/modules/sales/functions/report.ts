import { DateIntervalType } from "@lition/common";
import dayjs from "dayjs";
import { z } from "zod";
import { isAuthedProcedure } from "../../../router";

export const allSaleResume = isAuthedProcedure
  .input(
    z.object({
      mode: z.nativeEnum(DateIntervalType),
    })
  )
  .query(async ({ ctx, input }) => {
    const resolveMode = (mode: DateIntervalType) => {
      const now = dayjs();
      switch (mode) {
        case DateIntervalType.DAY:
          return [now.startOf("h").toDate(), undefined];
        case DateIntervalType.WEEK:
          return [now.subtract(7, "day").toDate(), now.toDate()];
        case DateIntervalType.MONTH:
          return [now.subtract(1, "month").toDate(), now.toDate()];
      }
    };
    const [from, to] = resolveMode(input.mode);

    const salesInfo = await ctx.bd.sale.aggregate({
      where: {
        createdAt: {
          gte: from,
          lte: to,
        },
        businessId: ctx.bussiness?.id!,
      },
      _count: {
        _all: true,
      },
      _sum: {
        total: true,
      },
    });

    const transactions = await ctx.bd.transaction.findMany({
      where: {
        client: {
          businessId: ctx.bussiness?.id!,
        },

        createdAt: {
          gte: from,
          lte: to,
        },
      },
    });

    const { paid } = transactions.reduce(
      (prev, curr) => {
        if (curr.paid) {
          return {
            paid: prev.paid + curr.total,
            debt: prev.debt,
          };
        }
        return {
          paid: prev.paid,
          debt: prev.debt + curr.total,
        };
      },
      { paid: 0, debt: 0 }
    );

    const debt = (salesInfo._sum?.total ?? 0) - paid;

    return {
      count: salesInfo._count._all,
      total: salesInfo._sum.total,
      debt: debt > 0 ? debt : 0,
      paid,
      transactions,
    };
  });

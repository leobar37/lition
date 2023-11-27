import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    total: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TransactionAvgOrderByAggregateInputObjectSchema = Schema;

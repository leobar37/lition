import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    unitId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UnitAliasAvgOrderByAggregateInputObjectSchema = Schema;
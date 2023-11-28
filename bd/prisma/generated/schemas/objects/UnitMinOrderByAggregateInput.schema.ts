import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    symbol: z.lazy(() => SortOrderSchema).optional(),
    allow_decimal: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UnitMinOrderByAggregateInputObjectSchema = Schema;

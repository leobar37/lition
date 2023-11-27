import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    clientId: z.lazy(() => SortOrderSchema).optional(),
    businessId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SaleMinOrderByAggregateInputObjectSchema = Schema;

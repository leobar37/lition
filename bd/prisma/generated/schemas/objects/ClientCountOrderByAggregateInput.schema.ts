import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    dni: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    direction: z.lazy(() => SortOrderSchema).optional(),
    direction_reference: z.lazy(() => SortOrderSchema).optional(),
    note: z.lazy(() => SortOrderSchema).optional(),
    businessId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ClientCountOrderByAggregateInputObjectSchema = Schema;

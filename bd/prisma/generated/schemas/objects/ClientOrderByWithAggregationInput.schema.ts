import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientCountOrderByAggregateInputObjectSchema } from './ClientCountOrderByAggregateInput.schema';
import { ClientAvgOrderByAggregateInputObjectSchema } from './ClientAvgOrderByAggregateInput.schema';
import { ClientMaxOrderByAggregateInputObjectSchema } from './ClientMaxOrderByAggregateInput.schema';
import { ClientMinOrderByAggregateInputObjectSchema } from './ClientMinOrderByAggregateInput.schema';
import { ClientSumOrderByAggregateInputObjectSchema } from './ClientSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    dni: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    direction: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    direction_reference: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    note: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    businessId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => ClientCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ClientAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ClientMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ClientMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ClientSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ClientOrderByWithAggregationInputObjectSchema = Schema;

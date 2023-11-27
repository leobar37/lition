import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SupplierCountOrderByAggregateInputObjectSchema } from './SupplierCountOrderByAggregateInput.schema';
import { SupplierAvgOrderByAggregateInputObjectSchema } from './SupplierAvgOrderByAggregateInput.schema';
import { SupplierMaxOrderByAggregateInputObjectSchema } from './SupplierMaxOrderByAggregateInput.schema';
import { SupplierMinOrderByAggregateInputObjectSchema } from './SupplierMinOrderByAggregateInput.schema';
import { SupplierSumOrderByAggregateInputObjectSchema } from './SupplierSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierOrderByWithAggregationInput> = z
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
    businessId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SupplierCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => SupplierAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SupplierMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SupplierMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SupplierSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SupplierOrderByWithAggregationInputObjectSchema = Schema;

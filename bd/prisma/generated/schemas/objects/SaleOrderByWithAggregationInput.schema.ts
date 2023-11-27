import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SaleCountOrderByAggregateInputObjectSchema } from './SaleCountOrderByAggregateInput.schema';
import { SaleAvgOrderByAggregateInputObjectSchema } from './SaleAvgOrderByAggregateInput.schema';
import { SaleMaxOrderByAggregateInputObjectSchema } from './SaleMaxOrderByAggregateInput.schema';
import { SaleMinOrderByAggregateInputObjectSchema } from './SaleMinOrderByAggregateInput.schema';
import { SaleSumOrderByAggregateInputObjectSchema } from './SaleSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    clientId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    businessId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => SaleCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => SaleAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SaleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SaleMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SaleSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SaleOrderByWithAggregationInputObjectSchema = Schema;

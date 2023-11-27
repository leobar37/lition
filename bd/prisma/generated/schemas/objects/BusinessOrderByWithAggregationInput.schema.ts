import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BusinessCountOrderByAggregateInputObjectSchema } from './BusinessCountOrderByAggregateInput.schema';
import { BusinessAvgOrderByAggregateInputObjectSchema } from './BusinessAvgOrderByAggregateInput.schema';
import { BusinessMaxOrderByAggregateInputObjectSchema } from './BusinessMaxOrderByAggregateInput.schema';
import { BusinessMinOrderByAggregateInputObjectSchema } from './BusinessMinOrderByAggregateInput.schema';
import { BusinessSumOrderByAggregateInputObjectSchema } from './BusinessSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => BusinessCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => BusinessAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => BusinessMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => BusinessMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => BusinessSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const BusinessOrderByWithAggregationInputObjectSchema = Schema;

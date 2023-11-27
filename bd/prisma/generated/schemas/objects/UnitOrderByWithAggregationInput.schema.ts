import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UnitCountOrderByAggregateInputObjectSchema } from './UnitCountOrderByAggregateInput.schema';
import { UnitAvgOrderByAggregateInputObjectSchema } from './UnitAvgOrderByAggregateInput.schema';
import { UnitMaxOrderByAggregateInputObjectSchema } from './UnitMaxOrderByAggregateInput.schema';
import { UnitMinOrderByAggregateInputObjectSchema } from './UnitMinOrderByAggregateInput.schema';
import { UnitSumOrderByAggregateInputObjectSchema } from './UnitSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    allow_decimal: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => UnitCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => UnitAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UnitMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UnitMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => UnitSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UnitOrderByWithAggregationInputObjectSchema = Schema;

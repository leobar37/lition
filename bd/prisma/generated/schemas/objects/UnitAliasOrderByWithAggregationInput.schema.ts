import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UnitAliasCountOrderByAggregateInputObjectSchema } from './UnitAliasCountOrderByAggregateInput.schema';
import { UnitAliasAvgOrderByAggregateInputObjectSchema } from './UnitAliasAvgOrderByAggregateInput.schema';
import { UnitAliasMaxOrderByAggregateInputObjectSchema } from './UnitAliasMaxOrderByAggregateInput.schema';
import { UnitAliasMinOrderByAggregateInputObjectSchema } from './UnitAliasMinOrderByAggregateInput.schema';
import { UnitAliasSumOrderByAggregateInputObjectSchema } from './UnitAliasSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    unitId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => UnitAliasCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => UnitAliasAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => UnitAliasMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => UnitAliasMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => UnitAliasSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitAliasOrderByWithAggregationInputObjectSchema = Schema;

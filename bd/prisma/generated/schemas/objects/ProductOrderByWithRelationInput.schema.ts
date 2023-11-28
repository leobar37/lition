import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UnitAliasOrderByRelationAggregateInputObjectSchema } from './UnitAliasOrderByRelationAggregateInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';
import { BusinessOrderByWithRelationInputObjectSchema } from './BusinessOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    businessId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    unitAlias: z
      .lazy(() => UnitAliasOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Sale: z
      .lazy(() => SaleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    business: z
      .lazy(() => BusinessOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;

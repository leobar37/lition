import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UnitAliasOrderByRelationAggregateInputObjectSchema } from './UnitAliasOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    allow_decimal: z.lazy(() => SortOrderSchema).optional(),
    unitAlias: z
      .lazy(() => UnitAliasOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitOrderByWithRelationInputObjectSchema = Schema;

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UnitOrderByWithRelationInputObjectSchema } from './UnitOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    unitId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    unit: z.lazy(() => UnitOrderByWithRelationInputObjectSchema).optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const UnitAliasOrderByWithRelationInputObjectSchema = Schema;

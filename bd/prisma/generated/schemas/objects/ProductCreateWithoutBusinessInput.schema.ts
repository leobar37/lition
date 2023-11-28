import { z } from 'zod';
import { UnitAliasCreateNestedManyWithoutProductInputObjectSchema } from './UnitAliasCreateNestedManyWithoutProductInput.schema';
import { SaleCreateNestedManyWithoutProductInputObjectSchema } from './SaleCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutBusinessInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    unitAlias: z
      .lazy(() => UnitAliasCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    Sale: z
      .lazy(() => SaleCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateWithoutBusinessInputObjectSchema = Schema;

import { z } from 'zod';
import { ProductUpdateWithoutUnitAliasInputObjectSchema } from './ProductUpdateWithoutUnitAliasInput.schema';
import { ProductUncheckedUpdateWithoutUnitAliasInputObjectSchema } from './ProductUncheckedUpdateWithoutUnitAliasInput.schema';
import { ProductCreateWithoutUnitAliasInputObjectSchema } from './ProductCreateWithoutUnitAliasInput.schema';
import { ProductUncheckedCreateWithoutUnitAliasInputObjectSchema } from './ProductUncheckedCreateWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutUnitAliasInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutUnitAliasInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutUnitAliasInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutUnitAliasInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutUnitAliasInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutUnitAliasInputObjectSchema = Schema;

import { z } from 'zod';
import { ProductCreateWithoutUnitAliasInputObjectSchema } from './ProductCreateWithoutUnitAliasInput.schema';
import { ProductUncheckedCreateWithoutUnitAliasInputObjectSchema } from './ProductUncheckedCreateWithoutUnitAliasInput.schema';
import { ProductCreateOrConnectWithoutUnitAliasInputObjectSchema } from './ProductCreateOrConnectWithoutUnitAliasInput.schema';
import { ProductUpsertWithoutUnitAliasInputObjectSchema } from './ProductUpsertWithoutUnitAliasInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutUnitAliasInputObjectSchema } from './ProductUpdateWithoutUnitAliasInput.schema';
import { ProductUncheckedUpdateWithoutUnitAliasInputObjectSchema } from './ProductUncheckedUpdateWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutUnitAliasNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutUnitAliasInputObjectSchema),
          z.lazy(() => ProductUncheckedCreateWithoutUnitAliasInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutUnitAliasInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutUnitAliasInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutUnitAliasInputObjectSchema),
          z.lazy(() => ProductUncheckedUpdateWithoutUnitAliasInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutUnitAliasNestedInputObjectSchema =
  Schema;

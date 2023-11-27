import { z } from 'zod';
import { ProductCreateWithoutUnitAliasInputObjectSchema } from './ProductCreateWithoutUnitAliasInput.schema';
import { ProductUncheckedCreateWithoutUnitAliasInputObjectSchema } from './ProductUncheckedCreateWithoutUnitAliasInput.schema';
import { ProductCreateOrConnectWithoutUnitAliasInputObjectSchema } from './ProductCreateOrConnectWithoutUnitAliasInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutUnitAliasInput> = z
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
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutUnitAliasInputObjectSchema = Schema;

import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutUnitAliasInputObjectSchema } from './ProductCreateWithoutUnitAliasInput.schema';
import { ProductUncheckedCreateWithoutUnitAliasInputObjectSchema } from './ProductUncheckedCreateWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutUnitAliasInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutUnitAliasInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutUnitAliasInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutUnitAliasInputObjectSchema = Schema;

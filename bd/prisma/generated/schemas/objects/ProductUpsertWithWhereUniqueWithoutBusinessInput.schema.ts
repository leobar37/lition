import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutBusinessInputObjectSchema } from './ProductUpdateWithoutBusinessInput.schema';
import { ProductUncheckedUpdateWithoutBusinessInputObjectSchema } from './ProductUncheckedUpdateWithoutBusinessInput.schema';
import { ProductCreateWithoutBusinessInputObjectSchema } from './ProductCreateWithoutBusinessInput.schema';
import { ProductUncheckedCreateWithoutBusinessInputObjectSchema } from './ProductUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductCreateWithoutBusinessInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpsertWithWhereUniqueWithoutBusinessInputObjectSchema =
  Schema;

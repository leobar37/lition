import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutBusinessInputObjectSchema } from './ProductUpdateWithoutBusinessInput.schema';
import { ProductUncheckedUpdateWithoutBusinessInputObjectSchema } from './ProductUncheckedUpdateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpdateWithWhereUniqueWithoutBusinessInputObjectSchema =
  Schema;

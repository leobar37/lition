import { z } from 'zod';
import { ProductCreateWithoutSaleInputObjectSchema } from './ProductCreateWithoutSaleInput.schema';
import { ProductUncheckedCreateWithoutSaleInputObjectSchema } from './ProductUncheckedCreateWithoutSaleInput.schema';
import { ProductCreateOrConnectWithoutSaleInputObjectSchema } from './ProductCreateOrConnectWithoutSaleInput.schema';
import { ProductUpsertWithoutSaleInputObjectSchema } from './ProductUpsertWithoutSaleInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutSaleInputObjectSchema } from './ProductUpdateWithoutSaleInput.schema';
import { ProductUncheckedUpdateWithoutSaleInputObjectSchema } from './ProductUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutSaleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutSaleInputObjectSchema),
          z.lazy(() => ProductUncheckedCreateWithoutSaleInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutSaleInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutSaleInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutSaleInputObjectSchema),
          z.lazy(() => ProductUncheckedUpdateWithoutSaleInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutSaleNestedInputObjectSchema =
  Schema;

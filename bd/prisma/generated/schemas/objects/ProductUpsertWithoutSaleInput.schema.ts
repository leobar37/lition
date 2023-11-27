import { z } from 'zod';
import { ProductUpdateWithoutSaleInputObjectSchema } from './ProductUpdateWithoutSaleInput.schema';
import { ProductUncheckedUpdateWithoutSaleInputObjectSchema } from './ProductUncheckedUpdateWithoutSaleInput.schema';
import { ProductCreateWithoutSaleInputObjectSchema } from './ProductCreateWithoutSaleInput.schema';
import { ProductUncheckedCreateWithoutSaleInputObjectSchema } from './ProductUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutSaleInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutSaleInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutSaleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutSaleInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutSaleInputObjectSchema = Schema;

import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutSaleInputObjectSchema } from './ProductCreateWithoutSaleInput.schema';
import { ProductUncheckedCreateWithoutSaleInputObjectSchema } from './ProductUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutSaleInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutSaleInputObjectSchema = Schema;

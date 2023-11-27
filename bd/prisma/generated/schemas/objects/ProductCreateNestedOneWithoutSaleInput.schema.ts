import { z } from 'zod';
import { ProductCreateWithoutSaleInputObjectSchema } from './ProductCreateWithoutSaleInput.schema';
import { ProductUncheckedCreateWithoutSaleInputObjectSchema } from './ProductUncheckedCreateWithoutSaleInput.schema';
import { ProductCreateOrConnectWithoutSaleInputObjectSchema } from './ProductCreateOrConnectWithoutSaleInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutSaleInput> = z
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
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutSaleInputObjectSchema = Schema;

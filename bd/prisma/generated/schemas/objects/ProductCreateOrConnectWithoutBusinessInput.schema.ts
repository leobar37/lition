import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutBusinessInputObjectSchema } from './ProductCreateWithoutBusinessInput.schema';
import { ProductUncheckedCreateWithoutBusinessInputObjectSchema } from './ProductUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutBusinessInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutBusinessInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutBusinessInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutBusinessInputObjectSchema = Schema;

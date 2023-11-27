import { z } from 'zod';
import { ProductCreateNestedOneWithoutSaleInputObjectSchema } from './ProductCreateNestedOneWithoutSaleInput.schema';
import { ClientCreateNestedOneWithoutSaleInputObjectSchema } from './ClientCreateNestedOneWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutBusinessInput> = z
  .object({
    price: z.number(),
    amount: z.number(),
    product: z.lazy(() => ProductCreateNestedOneWithoutSaleInputObjectSchema),
    client: z
      .lazy(() => ClientCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleCreateWithoutBusinessInputObjectSchema = Schema;

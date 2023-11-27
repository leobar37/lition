import { z } from 'zod';
import { ProductCreateNestedOneWithoutSaleInputObjectSchema } from './ProductCreateNestedOneWithoutSaleInput.schema';
import { BusinessCreateNestedOneWithoutSalesInputObjectSchema } from './BusinessCreateNestedOneWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutClientInput> = z
  .object({
    price: z.number(),
    amount: z.number(),
    product: z.lazy(() => ProductCreateNestedOneWithoutSaleInputObjectSchema),
    business: z.lazy(
      () => BusinessCreateNestedOneWithoutSalesInputObjectSchema,
    ),
  })
  .strict();

export const SaleCreateWithoutClientInputObjectSchema = Schema;

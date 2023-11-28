import { z } from 'zod';
import { ProductCreateNestedOneWithoutSaleInputObjectSchema } from './ProductCreateNestedOneWithoutSaleInput.schema';
import { ClientCreateNestedOneWithoutSaleInputObjectSchema } from './ClientCreateNestedOneWithoutSaleInput.schema';
import { BusinessCreateNestedOneWithoutSalesInputObjectSchema } from './BusinessCreateNestedOneWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateInput> = z
  .object({
    price: z.number(),
    amount: z.number(),
    createdAt: z.coerce.date().optional(),
    product: z.lazy(() => ProductCreateNestedOneWithoutSaleInputObjectSchema),
    client: z
      .lazy(() => ClientCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    business: z.lazy(
      () => BusinessCreateNestedOneWithoutSalesInputObjectSchema,
    ),
  })
  .strict();

export const SaleCreateInputObjectSchema = Schema;

import { z } from 'zod';
import { ClientCreateNestedOneWithoutSaleInputObjectSchema } from './ClientCreateNestedOneWithoutSaleInput.schema';
import { BusinessCreateNestedOneWithoutSalesInputObjectSchema } from './BusinessCreateNestedOneWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutProductInput> = z
  .object({
    price: z.number(),
    amount: z.number(),
    createdAt: z.coerce.date().optional(),
    client: z
      .lazy(() => ClientCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    business: z.lazy(
      () => BusinessCreateNestedOneWithoutSalesInputObjectSchema,
    ),
  })
  .strict();

export const SaleCreateWithoutProductInputObjectSchema = Schema;

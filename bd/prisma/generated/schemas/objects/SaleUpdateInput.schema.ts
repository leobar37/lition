import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutSaleNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutSaleNestedInput.schema';
import { ClientUpdateOneWithoutSaleNestedInputObjectSchema } from './ClientUpdateOneWithoutSaleNestedInput.schema';
import { BusinessUpdateOneRequiredWithoutSalesNestedInputObjectSchema } from './BusinessUpdateOneRequiredWithoutSalesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateInput> = z
  .object({
    price: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    product: z
      .lazy(() => ProductUpdateOneRequiredWithoutSaleNestedInputObjectSchema)
      .optional(),
    client: z
      .lazy(() => ClientUpdateOneWithoutSaleNestedInputObjectSchema)
      .optional(),
    business: z
      .lazy(() => BusinessUpdateOneRequiredWithoutSalesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleUpdateInputObjectSchema = Schema;
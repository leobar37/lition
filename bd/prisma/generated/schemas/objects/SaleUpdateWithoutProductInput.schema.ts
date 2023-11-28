import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ClientUpdateOneWithoutSaleNestedInputObjectSchema } from './ClientUpdateOneWithoutSaleNestedInput.schema';
import { BusinessUpdateOneRequiredWithoutSalesNestedInputObjectSchema } from './BusinessUpdateOneRequiredWithoutSalesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithoutProductInput> = z
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
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    client: z
      .lazy(() => ClientUpdateOneWithoutSaleNestedInputObjectSchema)
      .optional(),
    business: z
      .lazy(() => BusinessUpdateOneRequiredWithoutSalesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleUpdateWithoutProductInputObjectSchema = Schema;

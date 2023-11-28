import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SaleUpdateManyWithoutProductNestedInputObjectSchema } from './SaleUpdateManyWithoutProductNestedInput.schema';
import { BusinessUpdateOneRequiredWithoutProductsNestedInputObjectSchema } from './BusinessUpdateOneRequiredWithoutProductsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithoutUnitAliasInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Sale: z
      .lazy(() => SaleUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    business: z
      .lazy(
        () => BusinessUpdateOneRequiredWithoutProductsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUpdateWithoutUnitAliasInputObjectSchema = Schema;

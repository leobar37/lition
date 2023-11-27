import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
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

import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UnitAliasUpdateManyWithoutProductNestedInputObjectSchema } from './UnitAliasUpdateManyWithoutProductNestedInput.schema';
import { BusinessUpdateOneRequiredWithoutProductsNestedInputObjectSchema } from './BusinessUpdateOneRequiredWithoutProductsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithoutSaleInput> = z
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
    unitAlias: z
      .lazy(() => UnitAliasUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    business: z
      .lazy(
        () => BusinessUpdateOneRequiredWithoutProductsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUpdateWithoutSaleInputObjectSchema = Schema;

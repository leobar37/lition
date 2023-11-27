import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UnitAliasUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './UnitAliasUncheckedUpdateManyWithoutProductNestedInput.schema';
import { SaleUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './SaleUncheckedUpdateManyWithoutProductNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutBusinessInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
      .lazy(
        () => UnitAliasUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
      )
      .optional(),
    Sale: z
      .lazy(() => SaleUncheckedUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductUncheckedUpdateWithoutBusinessInputObjectSchema = Schema;

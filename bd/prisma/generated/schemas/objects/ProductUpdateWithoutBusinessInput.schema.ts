import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UnitAliasUpdateManyWithoutProductNestedInputObjectSchema } from './UnitAliasUpdateManyWithoutProductNestedInput.schema';
import { SaleUpdateManyWithoutProductNestedInputObjectSchema } from './SaleUpdateManyWithoutProductNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithoutBusinessInput> = z
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
    Sale: z
      .lazy(() => SaleUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductUpdateWithoutBusinessInputObjectSchema = Schema;

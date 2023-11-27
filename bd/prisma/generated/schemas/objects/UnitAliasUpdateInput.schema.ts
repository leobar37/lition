import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UnitUpdateOneRequiredWithoutUnitAliasNestedInputObjectSchema } from './UnitUpdateOneRequiredWithoutUnitAliasNestedInput.schema';
import { ProductUpdateOneRequiredWithoutUnitAliasNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutUnitAliasNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    unit: z
      .lazy(() => UnitUpdateOneRequiredWithoutUnitAliasNestedInputObjectSchema)
      .optional(),
    product: z
      .lazy(
        () => ProductUpdateOneRequiredWithoutUnitAliasNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UnitAliasUpdateInputObjectSchema = Schema;

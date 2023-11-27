import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutUnitAliasNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutUnitAliasNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpdateWithoutUnitInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    product: z
      .lazy(
        () => ProductUpdateOneRequiredWithoutUnitAliasNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UnitAliasUpdateWithoutUnitInputObjectSchema = Schema;

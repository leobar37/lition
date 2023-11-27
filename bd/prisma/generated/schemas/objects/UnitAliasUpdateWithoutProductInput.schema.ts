import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UnitUpdateOneRequiredWithoutUnitAliasNestedInputObjectSchema } from './UnitUpdateOneRequiredWithoutUnitAliasNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpdateWithoutProductInput> = z
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
  })
  .strict();

export const UnitAliasUpdateWithoutProductInputObjectSchema = Schema;

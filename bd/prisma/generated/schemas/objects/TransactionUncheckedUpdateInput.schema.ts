import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { TypeTransactionSchema } from '../enums/TypeTransaction.schema';
import { EnumTypeTransactionFieldUpdateOperationsInputObjectSchema } from './EnumTypeTransactionFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    total: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    paid: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => TypeTransactionSchema),
        z.lazy(() => EnumTypeTransactionFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TransactionUncheckedUpdateInputObjectSchema = Schema;

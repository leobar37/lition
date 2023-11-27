import { z } from 'zod';
import { TypeTransactionSchema } from '../enums/TypeTransaction.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTypeTransactionFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => TypeTransactionSchema).optional(),
    })
    .strict();

export const EnumTypeTransactionFieldUpdateOperationsInputObjectSchema = Schema;

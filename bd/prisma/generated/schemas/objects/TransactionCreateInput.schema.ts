import { z } from 'zod';
import { TypeTransactionSchema } from '../enums/TypeTransaction.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateInput> = z
  .object({
    total: z.number(),
    paid: z.boolean(),
    type: z.lazy(() => TypeTransactionSchema).optional(),
  })
  .strict();

export const TransactionCreateInputObjectSchema = Schema;

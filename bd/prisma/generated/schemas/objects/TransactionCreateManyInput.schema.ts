import { z } from 'zod';
import { TypeTransactionSchema } from '../enums/TypeTransaction.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateManyInput> = z
  .object({
    id: z.number().optional(),
    total: z.number(),
    paid: z.boolean(),
    type: z.lazy(() => TypeTransactionSchema).optional(),
  })
  .strict();

export const TransactionCreateManyInputObjectSchema = Schema;

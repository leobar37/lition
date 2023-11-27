import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumTypeTransactionFilterObjectSchema } from './EnumTypeTransactionFilter.schema';
import { TypeTransactionSchema } from '../enums/TypeTransaction.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TransactionWhereInputObjectSchema),
        z.lazy(() => TransactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TransactionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TransactionWhereInputObjectSchema),
        z.lazy(() => TransactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    total: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    paid: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumTypeTransactionFilterObjectSchema),
        z.lazy(() => TypeTransactionSchema),
      ])
      .optional(),
  })
  .strict();

export const TransactionWhereInputObjectSchema = Schema;

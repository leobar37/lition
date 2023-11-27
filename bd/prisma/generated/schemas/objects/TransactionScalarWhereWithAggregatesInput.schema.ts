import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumTypeTransactionWithAggregatesFilterObjectSchema } from './EnumTypeTransactionWithAggregatesFilter.schema';
import { TypeTransactionSchema } from '../enums/TypeTransaction.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    total: z
      .union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    paid: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumTypeTransactionWithAggregatesFilterObjectSchema),
        z.lazy(() => TypeTransactionSchema),
      ])
      .optional(),
  })
  .strict();

export const TransactionScalarWhereWithAggregatesInputObjectSchema = Schema;

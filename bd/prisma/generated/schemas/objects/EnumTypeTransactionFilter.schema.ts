import { z } from 'zod';
import { TypeTransactionSchema } from '../enums/TypeTransaction.schema';
import { NestedEnumTypeTransactionFilterObjectSchema } from './NestedEnumTypeTransactionFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTypeTransactionFilter> = z
  .object({
    equals: z.lazy(() => TypeTransactionSchema).optional(),
    in: z
      .union([
        z.lazy(() => TypeTransactionSchema).array(),
        z.lazy(() => TypeTransactionSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => TypeTransactionSchema).array(),
        z.lazy(() => TypeTransactionSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => TypeTransactionSchema),
        z.lazy(() => NestedEnumTypeTransactionFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumTypeTransactionFilterObjectSchema = Schema;

import { z } from 'zod';
import { TypeTransactionSchema } from '../enums/TypeTransaction.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTypeTransactionFilterObjectSchema } from './NestedEnumTypeTransactionFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumTypeTransactionWithAggregatesFilter> =
  z
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
          z.lazy(
            () => NestedEnumTypeTransactionWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumTypeTransactionFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumTypeTransactionFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumTypeTransactionWithAggregatesFilterObjectSchema = Schema;

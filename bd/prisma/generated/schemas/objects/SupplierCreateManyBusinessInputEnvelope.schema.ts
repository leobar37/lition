import { z } from 'zod';
import { SupplierCreateManyBusinessInputObjectSchema } from './SupplierCreateManyBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateManyBusinessInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SupplierCreateManyBusinessInputObjectSchema),
      z.lazy(() => SupplierCreateManyBusinessInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SupplierCreateManyBusinessInputEnvelopeObjectSchema = Schema;

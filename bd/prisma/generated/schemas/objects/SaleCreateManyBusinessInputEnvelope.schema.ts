import { z } from 'zod';
import { SaleCreateManyBusinessInputObjectSchema } from './SaleCreateManyBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateManyBusinessInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SaleCreateManyBusinessInputObjectSchema),
      z.lazy(() => SaleCreateManyBusinessInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SaleCreateManyBusinessInputEnvelopeObjectSchema = Schema;

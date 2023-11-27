import { z } from 'zod';
import { SaleCreateManyProductInputObjectSchema } from './SaleCreateManyProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SaleCreateManyProductInputObjectSchema),
      z.lazy(() => SaleCreateManyProductInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SaleCreateManyProductInputEnvelopeObjectSchema = Schema;

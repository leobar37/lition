import { z } from 'zod';
import { SaleCreateManyClientInputObjectSchema } from './SaleCreateManyClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateManyClientInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SaleCreateManyClientInputObjectSchema),
      z.lazy(() => SaleCreateManyClientInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SaleCreateManyClientInputEnvelopeObjectSchema = Schema;

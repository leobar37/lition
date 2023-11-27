import { z } from 'zod';
import { ClientCreateManyBusinessInputObjectSchema } from './ClientCreateManyBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateManyBusinessInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ClientCreateManyBusinessInputObjectSchema),
      z.lazy(() => ClientCreateManyBusinessInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ClientCreateManyBusinessInputEnvelopeObjectSchema = Schema;

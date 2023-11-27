import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    code: z.literal(true).optional(),
  })
  .strict();

export const BusinessMaxAggregateInputObjectSchema = Schema;

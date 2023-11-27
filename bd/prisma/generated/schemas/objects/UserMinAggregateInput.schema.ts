import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    username: z.literal(true).optional(),
    name: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    password: z.literal(true).optional(),
    businessId: z.literal(true).optional(),
  })
  .strict();

export const UserMinAggregateInputObjectSchema = Schema;

import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    code: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const BusinessCreateManyInputObjectSchema = Schema;

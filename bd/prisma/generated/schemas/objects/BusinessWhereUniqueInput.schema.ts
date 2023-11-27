import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    code: z.string().optional(),
  })
  .strict();

export const BusinessWhereUniqueInputObjectSchema = Schema;

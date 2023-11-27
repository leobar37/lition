import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    businessId: z.number(),
  })
  .strict();

export const ProductCreateManyInputObjectSchema = Schema;

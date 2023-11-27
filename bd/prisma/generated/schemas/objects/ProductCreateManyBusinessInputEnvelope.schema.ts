import { z } from 'zod';
import { ProductCreateManyBusinessInputObjectSchema } from './ProductCreateManyBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateManyBusinessInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProductCreateManyBusinessInputObjectSchema),
      z.lazy(() => ProductCreateManyBusinessInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProductCreateManyBusinessInputEnvelopeObjectSchema = Schema;

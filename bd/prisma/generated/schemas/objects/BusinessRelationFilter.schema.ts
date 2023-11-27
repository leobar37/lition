import { z } from 'zod';
import { BusinessWhereInputObjectSchema } from './BusinessWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessRelationFilter> = z
  .object({
    is: z
      .lazy(() => BusinessWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BusinessWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BusinessRelationFilterObjectSchema = Schema;

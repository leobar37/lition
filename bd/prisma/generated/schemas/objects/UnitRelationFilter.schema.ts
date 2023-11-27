import { z } from 'zod';
import { UnitWhereInputObjectSchema } from './UnitWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitRelationFilter> = z
  .object({
    is: z
      .lazy(() => UnitWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => UnitWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const UnitRelationFilterObjectSchema = Schema;

import { z } from 'zod';
import { UnitAliasWhereInputObjectSchema } from './UnitAliasWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasListRelationFilter> = z
  .object({
    every: z.lazy(() => UnitAliasWhereInputObjectSchema).optional(),
    some: z.lazy(() => UnitAliasWhereInputObjectSchema).optional(),
    none: z.lazy(() => UnitAliasWhereInputObjectSchema).optional(),
  })
  .strict();

export const UnitAliasListRelationFilterObjectSchema = Schema;

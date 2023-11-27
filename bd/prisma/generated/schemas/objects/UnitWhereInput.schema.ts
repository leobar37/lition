import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { UnitAliasListRelationFilterObjectSchema } from './UnitAliasListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UnitWhereInputObjectSchema),
        z.lazy(() => UnitWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UnitWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UnitWhereInputObjectSchema),
        z.lazy(() => UnitWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    allow_decimal: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    unitAlias: z.lazy(() => UnitAliasListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UnitWhereInputObjectSchema = Schema;

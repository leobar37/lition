import { z } from 'zod';
import { UnitCreateNestedOneWithoutUnitAliasInputObjectSchema } from './UnitCreateNestedOneWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateWithoutProductInput> = z
  .object({
    name: z.string(),
    unit: z.lazy(() => UnitCreateNestedOneWithoutUnitAliasInputObjectSchema),
  })
  .strict();

export const UnitAliasCreateWithoutProductInputObjectSchema = Schema;

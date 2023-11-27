import { z } from 'zod';
import { UnitUpdateWithoutUnitAliasInputObjectSchema } from './UnitUpdateWithoutUnitAliasInput.schema';
import { UnitUncheckedUpdateWithoutUnitAliasInputObjectSchema } from './UnitUncheckedUpdateWithoutUnitAliasInput.schema';
import { UnitCreateWithoutUnitAliasInputObjectSchema } from './UnitCreateWithoutUnitAliasInput.schema';
import { UnitUncheckedCreateWithoutUnitAliasInputObjectSchema } from './UnitUncheckedCreateWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpsertWithoutUnitAliasInput> = z
  .object({
    update: z.union([
      z.lazy(() => UnitUpdateWithoutUnitAliasInputObjectSchema),
      z.lazy(() => UnitUncheckedUpdateWithoutUnitAliasInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UnitCreateWithoutUnitAliasInputObjectSchema),
      z.lazy(() => UnitUncheckedCreateWithoutUnitAliasInputObjectSchema),
    ]),
  })
  .strict();

export const UnitUpsertWithoutUnitAliasInputObjectSchema = Schema;

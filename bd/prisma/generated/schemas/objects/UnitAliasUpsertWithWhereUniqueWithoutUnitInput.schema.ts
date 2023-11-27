import { z } from 'zod';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';
import { UnitAliasUpdateWithoutUnitInputObjectSchema } from './UnitAliasUpdateWithoutUnitInput.schema';
import { UnitAliasUncheckedUpdateWithoutUnitInputObjectSchema } from './UnitAliasUncheckedUpdateWithoutUnitInput.schema';
import { UnitAliasCreateWithoutUnitInputObjectSchema } from './UnitAliasCreateWithoutUnitInput.schema';
import { UnitAliasUncheckedCreateWithoutUnitInputObjectSchema } from './UnitAliasUncheckedCreateWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpsertWithWhereUniqueWithoutUnitInput> =
  z
    .object({
      where: z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UnitAliasUpdateWithoutUnitInputObjectSchema),
        z.lazy(() => UnitAliasUncheckedUpdateWithoutUnitInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UnitAliasCreateWithoutUnitInputObjectSchema),
        z.lazy(() => UnitAliasUncheckedCreateWithoutUnitInputObjectSchema),
      ]),
    })
    .strict();

export const UnitAliasUpsertWithWhereUniqueWithoutUnitInputObjectSchema =
  Schema;

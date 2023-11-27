import { z } from 'zod';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';
import { UnitAliasUpdateWithoutUnitInputObjectSchema } from './UnitAliasUpdateWithoutUnitInput.schema';
import { UnitAliasUncheckedUpdateWithoutUnitInputObjectSchema } from './UnitAliasUncheckedUpdateWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpdateWithWhereUniqueWithoutUnitInput> =
  z
    .object({
      where: z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UnitAliasUpdateWithoutUnitInputObjectSchema),
        z.lazy(() => UnitAliasUncheckedUpdateWithoutUnitInputObjectSchema),
      ]),
    })
    .strict();

export const UnitAliasUpdateWithWhereUniqueWithoutUnitInputObjectSchema =
  Schema;

import { z } from 'zod';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';
import { UnitAliasUpdateWithoutProductInputObjectSchema } from './UnitAliasUpdateWithoutProductInput.schema';
import { UnitAliasUncheckedUpdateWithoutProductInputObjectSchema } from './UnitAliasUncheckedUpdateWithoutProductInput.schema';
import { UnitAliasCreateWithoutProductInputObjectSchema } from './UnitAliasCreateWithoutProductInput.schema';
import { UnitAliasUncheckedCreateWithoutProductInputObjectSchema } from './UnitAliasUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UnitAliasUpdateWithoutProductInputObjectSchema),
        z.lazy(() => UnitAliasUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UnitAliasCreateWithoutProductInputObjectSchema),
        z.lazy(() => UnitAliasUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const UnitAliasUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;

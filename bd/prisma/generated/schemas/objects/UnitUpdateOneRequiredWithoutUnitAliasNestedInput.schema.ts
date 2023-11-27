import { z } from 'zod';
import { UnitCreateWithoutUnitAliasInputObjectSchema } from './UnitCreateWithoutUnitAliasInput.schema';
import { UnitUncheckedCreateWithoutUnitAliasInputObjectSchema } from './UnitUncheckedCreateWithoutUnitAliasInput.schema';
import { UnitCreateOrConnectWithoutUnitAliasInputObjectSchema } from './UnitCreateOrConnectWithoutUnitAliasInput.schema';
import { UnitUpsertWithoutUnitAliasInputObjectSchema } from './UnitUpsertWithoutUnitAliasInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitUpdateWithoutUnitAliasInputObjectSchema } from './UnitUpdateWithoutUnitAliasInput.schema';
import { UnitUncheckedUpdateWithoutUnitAliasInputObjectSchema } from './UnitUncheckedUpdateWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpdateOneRequiredWithoutUnitAliasNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UnitCreateWithoutUnitAliasInputObjectSchema),
          z.lazy(() => UnitUncheckedCreateWithoutUnitAliasInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UnitCreateOrConnectWithoutUnitAliasInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UnitUpsertWithoutUnitAliasInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UnitWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UnitUpdateWithoutUnitAliasInputObjectSchema),
          z.lazy(() => UnitUncheckedUpdateWithoutUnitAliasInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UnitUpdateOneRequiredWithoutUnitAliasNestedInputObjectSchema =
  Schema;

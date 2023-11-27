import { z } from 'zod';
import { UnitAliasCreateWithoutUnitInputObjectSchema } from './UnitAliasCreateWithoutUnitInput.schema';
import { UnitAliasUncheckedCreateWithoutUnitInputObjectSchema } from './UnitAliasUncheckedCreateWithoutUnitInput.schema';
import { UnitAliasCreateOrConnectWithoutUnitInputObjectSchema } from './UnitAliasCreateOrConnectWithoutUnitInput.schema';
import { UnitAliasCreateManyUnitInputEnvelopeObjectSchema } from './UnitAliasCreateManyUnitInputEnvelope.schema';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUncheckedCreateNestedManyWithoutUnitInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UnitAliasCreateWithoutUnitInputObjectSchema),
          z.lazy(() => UnitAliasCreateWithoutUnitInputObjectSchema).array(),
          z.lazy(() => UnitAliasUncheckedCreateWithoutUnitInputObjectSchema),
          z
            .lazy(() => UnitAliasUncheckedCreateWithoutUnitInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UnitAliasCreateOrConnectWithoutUnitInputObjectSchema),
          z
            .lazy(() => UnitAliasCreateOrConnectWithoutUnitInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UnitAliasCreateManyUnitInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
          z.lazy(() => UnitAliasWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UnitAliasUncheckedCreateNestedManyWithoutUnitInputObjectSchema =
  Schema;

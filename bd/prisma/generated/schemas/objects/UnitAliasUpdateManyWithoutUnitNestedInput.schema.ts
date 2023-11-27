import { z } from 'zod';
import { UnitAliasCreateWithoutUnitInputObjectSchema } from './UnitAliasCreateWithoutUnitInput.schema';
import { UnitAliasUncheckedCreateWithoutUnitInputObjectSchema } from './UnitAliasUncheckedCreateWithoutUnitInput.schema';
import { UnitAliasCreateOrConnectWithoutUnitInputObjectSchema } from './UnitAliasCreateOrConnectWithoutUnitInput.schema';
import { UnitAliasUpsertWithWhereUniqueWithoutUnitInputObjectSchema } from './UnitAliasUpsertWithWhereUniqueWithoutUnitInput.schema';
import { UnitAliasCreateManyUnitInputEnvelopeObjectSchema } from './UnitAliasCreateManyUnitInputEnvelope.schema';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';
import { UnitAliasUpdateWithWhereUniqueWithoutUnitInputObjectSchema } from './UnitAliasUpdateWithWhereUniqueWithoutUnitInput.schema';
import { UnitAliasUpdateManyWithWhereWithoutUnitInputObjectSchema } from './UnitAliasUpdateManyWithWhereWithoutUnitInput.schema';
import { UnitAliasScalarWhereInputObjectSchema } from './UnitAliasScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpdateManyWithoutUnitNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => UnitAliasUpsertWithWhereUniqueWithoutUnitInputObjectSchema,
        ),
        z
          .lazy(
            () => UnitAliasUpsertWithWhereUniqueWithoutUnitInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => UnitAliasCreateManyUnitInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => UnitAliasUpdateWithWhereUniqueWithoutUnitInputObjectSchema,
        ),
        z
          .lazy(
            () => UnitAliasUpdateWithWhereUniqueWithoutUnitInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UnitAliasUpdateManyWithWhereWithoutUnitInputObjectSchema),
        z
          .lazy(() => UnitAliasUpdateManyWithWhereWithoutUnitInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UnitAliasScalarWhereInputObjectSchema),
        z.lazy(() => UnitAliasScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UnitAliasUpdateManyWithoutUnitNestedInputObjectSchema = Schema;

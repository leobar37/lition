import { z } from 'zod';
import { UnitAliasCreateWithoutProductInputObjectSchema } from './UnitAliasCreateWithoutProductInput.schema';
import { UnitAliasUncheckedCreateWithoutProductInputObjectSchema } from './UnitAliasUncheckedCreateWithoutProductInput.schema';
import { UnitAliasCreateOrConnectWithoutProductInputObjectSchema } from './UnitAliasCreateOrConnectWithoutProductInput.schema';
import { UnitAliasUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './UnitAliasUpsertWithWhereUniqueWithoutProductInput.schema';
import { UnitAliasCreateManyProductInputEnvelopeObjectSchema } from './UnitAliasCreateManyProductInputEnvelope.schema';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';
import { UnitAliasUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './UnitAliasUpdateWithWhereUniqueWithoutProductInput.schema';
import { UnitAliasUpdateManyWithWhereWithoutProductInputObjectSchema } from './UnitAliasUpdateManyWithWhereWithoutProductInput.schema';
import { UnitAliasScalarWhereInputObjectSchema } from './UnitAliasScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpdateManyWithoutProductNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UnitAliasCreateWithoutProductInputObjectSchema),
        z.lazy(() => UnitAliasCreateWithoutProductInputObjectSchema).array(),
        z.lazy(() => UnitAliasUncheckedCreateWithoutProductInputObjectSchema),
        z
          .lazy(() => UnitAliasUncheckedCreateWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UnitAliasCreateOrConnectWithoutProductInputObjectSchema),
        z
          .lazy(() => UnitAliasCreateOrConnectWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => UnitAliasUpsertWithWhereUniqueWithoutProductInputObjectSchema,
        ),
        z
          .lazy(
            () => UnitAliasUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => UnitAliasCreateManyProductInputEnvelopeObjectSchema)
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
          () => UnitAliasUpdateWithWhereUniqueWithoutProductInputObjectSchema,
        ),
        z
          .lazy(
            () => UnitAliasUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => UnitAliasUpdateManyWithWhereWithoutProductInputObjectSchema,
        ),
        z
          .lazy(
            () => UnitAliasUpdateManyWithWhereWithoutProductInputObjectSchema,
          )
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

export const UnitAliasUpdateManyWithoutProductNestedInputObjectSchema = Schema;

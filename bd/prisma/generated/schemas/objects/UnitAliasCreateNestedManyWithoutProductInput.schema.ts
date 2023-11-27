import { z } from 'zod';
import { UnitAliasCreateWithoutProductInputObjectSchema } from './UnitAliasCreateWithoutProductInput.schema';
import { UnitAliasUncheckedCreateWithoutProductInputObjectSchema } from './UnitAliasUncheckedCreateWithoutProductInput.schema';
import { UnitAliasCreateOrConnectWithoutProductInputObjectSchema } from './UnitAliasCreateOrConnectWithoutProductInput.schema';
import { UnitAliasCreateManyProductInputEnvelopeObjectSchema } from './UnitAliasCreateManyProductInputEnvelope.schema';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateNestedManyWithoutProductInput> = z
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
    createMany: z
      .lazy(() => UnitAliasCreateManyProductInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
        z.lazy(() => UnitAliasWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UnitAliasCreateNestedManyWithoutProductInputObjectSchema = Schema;

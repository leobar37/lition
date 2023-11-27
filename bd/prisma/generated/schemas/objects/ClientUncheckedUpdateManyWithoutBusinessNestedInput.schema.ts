import { z } from 'zod';
import { ClientCreateWithoutBusinessInputObjectSchema } from './ClientCreateWithoutBusinessInput.schema';
import { ClientUncheckedCreateWithoutBusinessInputObjectSchema } from './ClientUncheckedCreateWithoutBusinessInput.schema';
import { ClientCreateOrConnectWithoutBusinessInputObjectSchema } from './ClientCreateOrConnectWithoutBusinessInput.schema';
import { ClientUpsertWithWhereUniqueWithoutBusinessInputObjectSchema } from './ClientUpsertWithWhereUniqueWithoutBusinessInput.schema';
import { ClientCreateManyBusinessInputEnvelopeObjectSchema } from './ClientCreateManyBusinessInputEnvelope.schema';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateWithWhereUniqueWithoutBusinessInputObjectSchema } from './ClientUpdateWithWhereUniqueWithoutBusinessInput.schema';
import { ClientUpdateManyWithWhereWithoutBusinessInputObjectSchema } from './ClientUpdateManyWithWhereWithoutBusinessInput.schema';
import { ClientScalarWhereInputObjectSchema } from './ClientScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUncheckedUpdateManyWithoutBusinessNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ClientCreateWithoutBusinessInputObjectSchema),
          z.lazy(() => ClientCreateWithoutBusinessInputObjectSchema).array(),
          z.lazy(() => ClientUncheckedCreateWithoutBusinessInputObjectSchema),
          z
            .lazy(() => ClientUncheckedCreateWithoutBusinessInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ClientCreateOrConnectWithoutBusinessInputObjectSchema),
          z
            .lazy(() => ClientCreateOrConnectWithoutBusinessInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ClientUpsertWithWhereUniqueWithoutBusinessInputObjectSchema,
          ),
          z
            .lazy(
              () => ClientUpsertWithWhereUniqueWithoutBusinessInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ClientCreateManyBusinessInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ClientWhereUniqueInputObjectSchema),
          z.lazy(() => ClientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ClientWhereUniqueInputObjectSchema),
          z.lazy(() => ClientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ClientWhereUniqueInputObjectSchema),
          z.lazy(() => ClientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ClientWhereUniqueInputObjectSchema),
          z.lazy(() => ClientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ClientUpdateWithWhereUniqueWithoutBusinessInputObjectSchema,
          ),
          z
            .lazy(
              () => ClientUpdateWithWhereUniqueWithoutBusinessInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ClientUpdateManyWithWhereWithoutBusinessInputObjectSchema,
          ),
          z
            .lazy(
              () => ClientUpdateManyWithWhereWithoutBusinessInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ClientScalarWhereInputObjectSchema),
          z.lazy(() => ClientScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ClientUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema =
  Schema;

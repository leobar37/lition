import { z } from 'zod';
import { UserCreateWithoutBusinessInputObjectSchema } from './UserCreateWithoutBusinessInput.schema';
import { UserUncheckedCreateWithoutBusinessInputObjectSchema } from './UserUncheckedCreateWithoutBusinessInput.schema';
import { UserCreateOrConnectWithoutBusinessInputObjectSchema } from './UserCreateOrConnectWithoutBusinessInput.schema';
import { UserUpsertWithWhereUniqueWithoutBusinessInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutBusinessInput.schema';
import { UserCreateManyBusinessInputEnvelopeObjectSchema } from './UserCreateManyBusinessInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutBusinessInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutBusinessInput.schema';
import { UserUpdateManyWithWhereWithoutBusinessInputObjectSchema } from './UserUpdateManyWithWhereWithoutBusinessInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutBusinessNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutBusinessInputObjectSchema),
        z.lazy(() => UserCreateWithoutBusinessInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutBusinessInputObjectSchema),
        z
          .lazy(() => UserUncheckedCreateWithoutBusinessInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutBusinessInputObjectSchema),
        z
          .lazy(() => UserCreateOrConnectWithoutBusinessInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => UserUpsertWithWhereUniqueWithoutBusinessInputObjectSchema),
        z
          .lazy(() => UserUpsertWithWhereUniqueWithoutBusinessInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => UserCreateManyBusinessInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithWhereUniqueWithoutBusinessInputObjectSchema),
        z
          .lazy(() => UserUpdateWithWhereUniqueWithoutBusinessInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserUpdateManyWithWhereWithoutBusinessInputObjectSchema),
        z
          .lazy(() => UserUpdateManyWithWhereWithoutBusinessInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateManyWithoutBusinessNestedInputObjectSchema = Schema;

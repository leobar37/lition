import { z } from 'zod';
import { UserCreateWithoutBusinessInputObjectSchema } from './UserCreateWithoutBusinessInput.schema';
import { UserUncheckedCreateWithoutBusinessInputObjectSchema } from './UserUncheckedCreateWithoutBusinessInput.schema';
import { UserCreateOrConnectWithoutBusinessInputObjectSchema } from './UserCreateOrConnectWithoutBusinessInput.schema';
import { UserCreateManyBusinessInputEnvelopeObjectSchema } from './UserCreateManyBusinessInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutBusinessInput> =
  z
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
      createMany: z
        .lazy(() => UserCreateManyBusinessInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutBusinessInputObjectSchema =
  Schema;

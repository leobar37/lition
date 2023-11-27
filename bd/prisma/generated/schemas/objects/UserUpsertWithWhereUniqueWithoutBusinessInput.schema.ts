import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBusinessInputObjectSchema } from './UserUpdateWithoutBusinessInput.schema';
import { UserUncheckedUpdateWithoutBusinessInputObjectSchema } from './UserUncheckedUpdateWithoutBusinessInput.schema';
import { UserCreateWithoutBusinessInputObjectSchema } from './UserCreateWithoutBusinessInput.schema';
import { UserUncheckedCreateWithoutBusinessInputObjectSchema } from './UserUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutBusinessInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutBusinessInputObjectSchema = Schema;

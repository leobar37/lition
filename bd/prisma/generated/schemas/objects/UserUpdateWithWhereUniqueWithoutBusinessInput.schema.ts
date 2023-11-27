import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBusinessInputObjectSchema } from './UserUpdateWithoutBusinessInput.schema';
import { UserUncheckedUpdateWithoutBusinessInputObjectSchema } from './UserUncheckedUpdateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutBusinessInputObjectSchema = Schema;

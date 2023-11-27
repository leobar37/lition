import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBusinessInputObjectSchema } from './UserCreateWithoutBusinessInput.schema';
import { UserUncheckedCreateWithoutBusinessInputObjectSchema } from './UserUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBusinessInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutBusinessInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBusinessInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutBusinessInputObjectSchema = Schema;

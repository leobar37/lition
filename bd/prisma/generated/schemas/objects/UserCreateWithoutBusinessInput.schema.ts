import { z } from 'zod';
import { UserCreaterolesInputObjectSchema } from './UserCreaterolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutBusinessInput> = z
  .object({
    username: z.string(),
    name: z.string(),
    lastName: z.string(),
    password: z.string(),
    roles: z
      .union([
        z.lazy(() => UserCreaterolesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const UserCreateWithoutBusinessInputObjectSchema = Schema;

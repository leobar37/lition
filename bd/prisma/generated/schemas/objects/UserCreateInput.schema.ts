import { z } from 'zod';
import { UserCreaterolesInputObjectSchema } from './UserCreaterolesInput.schema';
import { BusinessCreateNestedOneWithoutUsersInputObjectSchema } from './BusinessCreateNestedOneWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
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
    business: z.lazy(
      () => BusinessCreateNestedOneWithoutUsersInputObjectSchema,
    ),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;

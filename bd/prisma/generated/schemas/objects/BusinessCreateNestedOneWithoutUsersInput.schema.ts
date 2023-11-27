import { z } from 'zod';
import { BusinessCreateWithoutUsersInputObjectSchema } from './BusinessCreateWithoutUsersInput.schema';
import { BusinessUncheckedCreateWithoutUsersInputObjectSchema } from './BusinessUncheckedCreateWithoutUsersInput.schema';
import { BusinessCreateOrConnectWithoutUsersInputObjectSchema } from './BusinessCreateOrConnectWithoutUsersInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BusinessCreateWithoutUsersInputObjectSchema),
        z.lazy(() => BusinessUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BusinessCreateOrConnectWithoutUsersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BusinessCreateNestedOneWithoutUsersInputObjectSchema = Schema;

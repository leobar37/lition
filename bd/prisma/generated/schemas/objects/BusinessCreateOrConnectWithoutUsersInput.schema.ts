import { z } from 'zod';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessCreateWithoutUsersInputObjectSchema } from './BusinessCreateWithoutUsersInput.schema';
import { BusinessUncheckedCreateWithoutUsersInputObjectSchema } from './BusinessUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => BusinessWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutUsersInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessCreateOrConnectWithoutUsersInputObjectSchema = Schema;

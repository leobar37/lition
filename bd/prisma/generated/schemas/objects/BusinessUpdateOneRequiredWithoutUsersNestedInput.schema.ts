import { z } from 'zod';
import { BusinessCreateWithoutUsersInputObjectSchema } from './BusinessCreateWithoutUsersInput.schema';
import { BusinessUncheckedCreateWithoutUsersInputObjectSchema } from './BusinessUncheckedCreateWithoutUsersInput.schema';
import { BusinessCreateOrConnectWithoutUsersInputObjectSchema } from './BusinessCreateOrConnectWithoutUsersInput.schema';
import { BusinessUpsertWithoutUsersInputObjectSchema } from './BusinessUpsertWithoutUsersInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessUpdateWithoutUsersInputObjectSchema } from './BusinessUpdateWithoutUsersInput.schema';
import { BusinessUncheckedUpdateWithoutUsersInputObjectSchema } from './BusinessUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutUsersNestedInput> =
  z
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
      upsert: z
        .lazy(() => BusinessUpsertWithoutUsersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BusinessUpdateWithoutUsersInputObjectSchema),
          z.lazy(() => BusinessUncheckedUpdateWithoutUsersInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const BusinessUpdateOneRequiredWithoutUsersNestedInputObjectSchema =
  Schema;

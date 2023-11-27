import { z } from 'zod';
import { BusinessUpdateWithoutUsersInputObjectSchema } from './BusinessUpdateWithoutUsersInput.schema';
import { BusinessUncheckedUpdateWithoutUsersInputObjectSchema } from './BusinessUncheckedUpdateWithoutUsersInput.schema';
import { BusinessCreateWithoutUsersInputObjectSchema } from './BusinessCreateWithoutUsersInput.schema';
import { BusinessUncheckedCreateWithoutUsersInputObjectSchema } from './BusinessUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => BusinessUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => BusinessUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutUsersInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessUpsertWithoutUsersInputObjectSchema = Schema;

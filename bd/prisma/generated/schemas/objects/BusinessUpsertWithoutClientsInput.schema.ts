import { z } from 'zod';
import { BusinessUpdateWithoutClientsInputObjectSchema } from './BusinessUpdateWithoutClientsInput.schema';
import { BusinessUncheckedUpdateWithoutClientsInputObjectSchema } from './BusinessUncheckedUpdateWithoutClientsInput.schema';
import { BusinessCreateWithoutClientsInputObjectSchema } from './BusinessCreateWithoutClientsInput.schema';
import { BusinessUncheckedCreateWithoutClientsInputObjectSchema } from './BusinessUncheckedCreateWithoutClientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpsertWithoutClientsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BusinessUpdateWithoutClientsInputObjectSchema),
      z.lazy(() => BusinessUncheckedUpdateWithoutClientsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutClientsInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutClientsInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessUpsertWithoutClientsInputObjectSchema = Schema;

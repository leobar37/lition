import { z } from 'zod';
import { BusinessCreateWithoutClientsInputObjectSchema } from './BusinessCreateWithoutClientsInput.schema';
import { BusinessUncheckedCreateWithoutClientsInputObjectSchema } from './BusinessUncheckedCreateWithoutClientsInput.schema';
import { BusinessCreateOrConnectWithoutClientsInputObjectSchema } from './BusinessCreateOrConnectWithoutClientsInput.schema';
import { BusinessUpsertWithoutClientsInputObjectSchema } from './BusinessUpsertWithoutClientsInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessUpdateWithoutClientsInputObjectSchema } from './BusinessUpdateWithoutClientsInput.schema';
import { BusinessUncheckedUpdateWithoutClientsInputObjectSchema } from './BusinessUncheckedUpdateWithoutClientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpdateOneWithoutClientsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BusinessCreateWithoutClientsInputObjectSchema),
        z.lazy(() => BusinessUncheckedCreateWithoutClientsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BusinessCreateOrConnectWithoutClientsInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => BusinessUpsertWithoutClientsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => BusinessUpdateWithoutClientsInputObjectSchema),
        z.lazy(() => BusinessUncheckedUpdateWithoutClientsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BusinessUpdateOneWithoutClientsNestedInputObjectSchema = Schema;

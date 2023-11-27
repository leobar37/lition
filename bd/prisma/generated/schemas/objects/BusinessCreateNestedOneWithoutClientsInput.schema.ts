import { z } from 'zod';
import { BusinessCreateWithoutClientsInputObjectSchema } from './BusinessCreateWithoutClientsInput.schema';
import { BusinessUncheckedCreateWithoutClientsInputObjectSchema } from './BusinessUncheckedCreateWithoutClientsInput.schema';
import { BusinessCreateOrConnectWithoutClientsInputObjectSchema } from './BusinessCreateOrConnectWithoutClientsInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutClientsInput> = z
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
    connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BusinessCreateNestedOneWithoutClientsInputObjectSchema = Schema;

import { z } from 'zod';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessCreateWithoutClientsInputObjectSchema } from './BusinessCreateWithoutClientsInput.schema';
import { BusinessUncheckedCreateWithoutClientsInputObjectSchema } from './BusinessUncheckedCreateWithoutClientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutClientsInput> = z
  .object({
    where: z.lazy(() => BusinessWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutClientsInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutClientsInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessCreateOrConnectWithoutClientsInputObjectSchema = Schema;

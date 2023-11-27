import { z } from 'zod';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessCreateWithoutSuppliersInputObjectSchema } from './BusinessCreateWithoutSuppliersInput.schema';
import { BusinessUncheckedCreateWithoutSuppliersInputObjectSchema } from './BusinessUncheckedCreateWithoutSuppliersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutSuppliersInput> = z
  .object({
    where: z.lazy(() => BusinessWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutSuppliersInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutSuppliersInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessCreateOrConnectWithoutSuppliersInputObjectSchema = Schema;

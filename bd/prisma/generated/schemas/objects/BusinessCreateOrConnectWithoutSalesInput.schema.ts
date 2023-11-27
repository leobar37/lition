import { z } from 'zod';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessCreateWithoutSalesInputObjectSchema } from './BusinessCreateWithoutSalesInput.schema';
import { BusinessUncheckedCreateWithoutSalesInputObjectSchema } from './BusinessUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutSalesInput> = z
  .object({
    where: z.lazy(() => BusinessWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutSalesInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessCreateOrConnectWithoutSalesInputObjectSchema = Schema;

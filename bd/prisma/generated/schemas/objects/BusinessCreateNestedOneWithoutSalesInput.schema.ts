import { z } from 'zod';
import { BusinessCreateWithoutSalesInputObjectSchema } from './BusinessCreateWithoutSalesInput.schema';
import { BusinessUncheckedCreateWithoutSalesInputObjectSchema } from './BusinessUncheckedCreateWithoutSalesInput.schema';
import { BusinessCreateOrConnectWithoutSalesInputObjectSchema } from './BusinessCreateOrConnectWithoutSalesInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutSalesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BusinessCreateWithoutSalesInputObjectSchema),
        z.lazy(() => BusinessUncheckedCreateWithoutSalesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BusinessCreateOrConnectWithoutSalesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BusinessCreateNestedOneWithoutSalesInputObjectSchema = Schema;

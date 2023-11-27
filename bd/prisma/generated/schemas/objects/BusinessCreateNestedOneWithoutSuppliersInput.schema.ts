import { z } from 'zod';
import { BusinessCreateWithoutSuppliersInputObjectSchema } from './BusinessCreateWithoutSuppliersInput.schema';
import { BusinessUncheckedCreateWithoutSuppliersInputObjectSchema } from './BusinessUncheckedCreateWithoutSuppliersInput.schema';
import { BusinessCreateOrConnectWithoutSuppliersInputObjectSchema } from './BusinessCreateOrConnectWithoutSuppliersInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutSuppliersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BusinessCreateWithoutSuppliersInputObjectSchema),
        z.lazy(() => BusinessUncheckedCreateWithoutSuppliersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BusinessCreateOrConnectWithoutSuppliersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BusinessCreateNestedOneWithoutSuppliersInputObjectSchema = Schema;

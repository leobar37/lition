import { z } from 'zod';
import { BusinessCreateWithoutProductsInputObjectSchema } from './BusinessCreateWithoutProductsInput.schema';
import { BusinessUncheckedCreateWithoutProductsInputObjectSchema } from './BusinessUncheckedCreateWithoutProductsInput.schema';
import { BusinessCreateOrConnectWithoutProductsInputObjectSchema } from './BusinessCreateOrConnectWithoutProductsInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutProductsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BusinessCreateWithoutProductsInputObjectSchema),
        z.lazy(() => BusinessUncheckedCreateWithoutProductsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BusinessCreateOrConnectWithoutProductsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BusinessCreateNestedOneWithoutProductsInputObjectSchema = Schema;

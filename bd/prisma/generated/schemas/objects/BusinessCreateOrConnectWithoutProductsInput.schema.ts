import { z } from 'zod';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessCreateWithoutProductsInputObjectSchema } from './BusinessCreateWithoutProductsInput.schema';
import { BusinessUncheckedCreateWithoutProductsInputObjectSchema } from './BusinessUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutProductsInput> = z
  .object({
    where: z.lazy(() => BusinessWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutProductsInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessCreateOrConnectWithoutProductsInputObjectSchema = Schema;

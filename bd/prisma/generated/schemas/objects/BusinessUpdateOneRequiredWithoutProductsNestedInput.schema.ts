import { z } from 'zod';
import { BusinessCreateWithoutProductsInputObjectSchema } from './BusinessCreateWithoutProductsInput.schema';
import { BusinessUncheckedCreateWithoutProductsInputObjectSchema } from './BusinessUncheckedCreateWithoutProductsInput.schema';
import { BusinessCreateOrConnectWithoutProductsInputObjectSchema } from './BusinessCreateOrConnectWithoutProductsInput.schema';
import { BusinessUpsertWithoutProductsInputObjectSchema } from './BusinessUpsertWithoutProductsInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessUpdateWithoutProductsInputObjectSchema } from './BusinessUpdateWithoutProductsInput.schema';
import { BusinessUncheckedUpdateWithoutProductsInputObjectSchema } from './BusinessUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutProductsNestedInput> =
  z
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
      upsert: z
        .lazy(() => BusinessUpsertWithoutProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BusinessUpdateWithoutProductsInputObjectSchema),
          z.lazy(() => BusinessUncheckedUpdateWithoutProductsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const BusinessUpdateOneRequiredWithoutProductsNestedInputObjectSchema =
  Schema;

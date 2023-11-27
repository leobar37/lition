import { z } from 'zod';
import { BusinessCreateWithoutSalesInputObjectSchema } from './BusinessCreateWithoutSalesInput.schema';
import { BusinessUncheckedCreateWithoutSalesInputObjectSchema } from './BusinessUncheckedCreateWithoutSalesInput.schema';
import { BusinessCreateOrConnectWithoutSalesInputObjectSchema } from './BusinessCreateOrConnectWithoutSalesInput.schema';
import { BusinessUpsertWithoutSalesInputObjectSchema } from './BusinessUpsertWithoutSalesInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessUpdateWithoutSalesInputObjectSchema } from './BusinessUpdateWithoutSalesInput.schema';
import { BusinessUncheckedUpdateWithoutSalesInputObjectSchema } from './BusinessUncheckedUpdateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutSalesNestedInput> =
  z
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
      upsert: z
        .lazy(() => BusinessUpsertWithoutSalesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BusinessUpdateWithoutSalesInputObjectSchema),
          z.lazy(() => BusinessUncheckedUpdateWithoutSalesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const BusinessUpdateOneRequiredWithoutSalesNestedInputObjectSchema =
  Schema;

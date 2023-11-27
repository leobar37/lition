import { z } from 'zod';
import { BusinessCreateWithoutSuppliersInputObjectSchema } from './BusinessCreateWithoutSuppliersInput.schema';
import { BusinessUncheckedCreateWithoutSuppliersInputObjectSchema } from './BusinessUncheckedCreateWithoutSuppliersInput.schema';
import { BusinessCreateOrConnectWithoutSuppliersInputObjectSchema } from './BusinessCreateOrConnectWithoutSuppliersInput.schema';
import { BusinessUpsertWithoutSuppliersInputObjectSchema } from './BusinessUpsertWithoutSuppliersInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './BusinessWhereUniqueInput.schema';
import { BusinessUpdateWithoutSuppliersInputObjectSchema } from './BusinessUpdateWithoutSuppliersInput.schema';
import { BusinessUncheckedUpdateWithoutSuppliersInputObjectSchema } from './BusinessUncheckedUpdateWithoutSuppliersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutSuppliersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BusinessCreateWithoutSuppliersInputObjectSchema),
          z.lazy(
            () => BusinessUncheckedCreateWithoutSuppliersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => BusinessCreateOrConnectWithoutSuppliersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => BusinessUpsertWithoutSuppliersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => BusinessWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => BusinessUpdateWithoutSuppliersInputObjectSchema),
          z.lazy(
            () => BusinessUncheckedUpdateWithoutSuppliersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BusinessUpdateOneRequiredWithoutSuppliersNestedInputObjectSchema =
  Schema;

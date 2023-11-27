import { z } from 'zod';
import { SupplierCreateWithoutBusinessInputObjectSchema } from './SupplierCreateWithoutBusinessInput.schema';
import { SupplierUncheckedCreateWithoutBusinessInputObjectSchema } from './SupplierUncheckedCreateWithoutBusinessInput.schema';
import { SupplierCreateOrConnectWithoutBusinessInputObjectSchema } from './SupplierCreateOrConnectWithoutBusinessInput.schema';
import { SupplierCreateManyBusinessInputEnvelopeObjectSchema } from './SupplierCreateManyBusinessInputEnvelope.schema';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUncheckedCreateNestedManyWithoutBusinessInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SupplierCreateWithoutBusinessInputObjectSchema),
          z.lazy(() => SupplierCreateWithoutBusinessInputObjectSchema).array(),
          z.lazy(() => SupplierUncheckedCreateWithoutBusinessInputObjectSchema),
          z
            .lazy(() => SupplierUncheckedCreateWithoutBusinessInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SupplierCreateOrConnectWithoutBusinessInputObjectSchema),
          z
            .lazy(() => SupplierCreateOrConnectWithoutBusinessInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SupplierCreateManyBusinessInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputObjectSchema),
          z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SupplierUncheckedCreateNestedManyWithoutBusinessInputObjectSchema =
  Schema;

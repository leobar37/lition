import { z } from 'zod';
import { SaleCreateWithoutProductInputObjectSchema } from './SaleCreateWithoutProductInput.schema';
import { SaleUncheckedCreateWithoutProductInputObjectSchema } from './SaleUncheckedCreateWithoutProductInput.schema';
import { SaleCreateOrConnectWithoutProductInputObjectSchema } from './SaleCreateOrConnectWithoutProductInput.schema';
import { SaleCreateManyProductInputEnvelopeObjectSchema } from './SaleCreateManyProductInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SaleCreateWithoutProductInputObjectSchema),
          z.lazy(() => SaleCreateWithoutProductInputObjectSchema).array(),
          z.lazy(() => SaleUncheckedCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => SaleUncheckedCreateWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SaleCreateOrConnectWithoutProductInputObjectSchema),
          z
            .lazy(() => SaleCreateOrConnectWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SaleCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SaleWhereUniqueInputObjectSchema),
          z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SaleUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema;

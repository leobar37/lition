import { z } from 'zod';
import { SaleCreateWithoutBusinessInputObjectSchema } from './SaleCreateWithoutBusinessInput.schema';
import { SaleUncheckedCreateWithoutBusinessInputObjectSchema } from './SaleUncheckedCreateWithoutBusinessInput.schema';
import { SaleCreateOrConnectWithoutBusinessInputObjectSchema } from './SaleCreateOrConnectWithoutBusinessInput.schema';
import { SaleCreateManyBusinessInputEnvelopeObjectSchema } from './SaleCreateManyBusinessInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateNestedManyWithoutBusinessInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SaleCreateWithoutBusinessInputObjectSchema),
          z.lazy(() => SaleCreateWithoutBusinessInputObjectSchema).array(),
          z.lazy(() => SaleUncheckedCreateWithoutBusinessInputObjectSchema),
          z
            .lazy(() => SaleUncheckedCreateWithoutBusinessInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SaleCreateOrConnectWithoutBusinessInputObjectSchema),
          z
            .lazy(() => SaleCreateOrConnectWithoutBusinessInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SaleCreateManyBusinessInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SaleWhereUniqueInputObjectSchema),
          z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SaleUncheckedCreateNestedManyWithoutBusinessInputObjectSchema =
  Schema;

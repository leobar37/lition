import { z } from 'zod';
import { ClientCreateWithoutBusinessInputObjectSchema } from './ClientCreateWithoutBusinessInput.schema';
import { ClientUncheckedCreateWithoutBusinessInputObjectSchema } from './ClientUncheckedCreateWithoutBusinessInput.schema';
import { ClientCreateOrConnectWithoutBusinessInputObjectSchema } from './ClientCreateOrConnectWithoutBusinessInput.schema';
import { ClientCreateManyBusinessInputEnvelopeObjectSchema } from './ClientCreateManyBusinessInputEnvelope.schema';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUncheckedCreateNestedManyWithoutBusinessInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ClientCreateWithoutBusinessInputObjectSchema),
          z.lazy(() => ClientCreateWithoutBusinessInputObjectSchema).array(),
          z.lazy(() => ClientUncheckedCreateWithoutBusinessInputObjectSchema),
          z
            .lazy(() => ClientUncheckedCreateWithoutBusinessInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ClientCreateOrConnectWithoutBusinessInputObjectSchema),
          z
            .lazy(() => ClientCreateOrConnectWithoutBusinessInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ClientCreateManyBusinessInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ClientWhereUniqueInputObjectSchema),
          z.lazy(() => ClientWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ClientUncheckedCreateNestedManyWithoutBusinessInputObjectSchema =
  Schema;

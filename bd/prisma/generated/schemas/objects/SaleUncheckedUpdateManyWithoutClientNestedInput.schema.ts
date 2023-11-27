import { z } from 'zod';
import { SaleCreateWithoutClientInputObjectSchema } from './SaleCreateWithoutClientInput.schema';
import { SaleUncheckedCreateWithoutClientInputObjectSchema } from './SaleUncheckedCreateWithoutClientInput.schema';
import { SaleCreateOrConnectWithoutClientInputObjectSchema } from './SaleCreateOrConnectWithoutClientInput.schema';
import { SaleUpsertWithWhereUniqueWithoutClientInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutClientInput.schema';
import { SaleCreateManyClientInputEnvelopeObjectSchema } from './SaleCreateManyClientInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutClientInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutClientInput.schema';
import { SaleUpdateManyWithWhereWithoutClientInputObjectSchema } from './SaleUpdateManyWithWhereWithoutClientInput.schema';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutClientNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SaleCreateWithoutClientInputObjectSchema),
          z.lazy(() => SaleCreateWithoutClientInputObjectSchema).array(),
          z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema),
          z
            .lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SaleCreateOrConnectWithoutClientInputObjectSchema),
          z
            .lazy(() => SaleCreateOrConnectWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SaleUpsertWithWhereUniqueWithoutClientInputObjectSchema),
          z
            .lazy(() => SaleUpsertWithWhereUniqueWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SaleCreateManyClientInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SaleWhereUniqueInputObjectSchema),
          z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SaleWhereUniqueInputObjectSchema),
          z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SaleWhereUniqueInputObjectSchema),
          z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SaleWhereUniqueInputObjectSchema),
          z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SaleUpdateWithWhereUniqueWithoutClientInputObjectSchema),
          z
            .lazy(() => SaleUpdateWithWhereUniqueWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SaleUpdateManyWithWhereWithoutClientInputObjectSchema),
          z
            .lazy(() => SaleUpdateManyWithWhereWithoutClientInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SaleScalarWhereInputObjectSchema),
          z.lazy(() => SaleScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SaleUncheckedUpdateManyWithoutClientNestedInputObjectSchema =
  Schema;

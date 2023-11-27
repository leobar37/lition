import { z } from 'zod';
import { SaleCreateWithoutBusinessInputObjectSchema } from './SaleCreateWithoutBusinessInput.schema';
import { SaleUncheckedCreateWithoutBusinessInputObjectSchema } from './SaleUncheckedCreateWithoutBusinessInput.schema';
import { SaleCreateOrConnectWithoutBusinessInputObjectSchema } from './SaleCreateOrConnectWithoutBusinessInput.schema';
import { SaleUpsertWithWhereUniqueWithoutBusinessInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutBusinessInput.schema';
import { SaleCreateManyBusinessInputEnvelopeObjectSchema } from './SaleCreateManyBusinessInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutBusinessInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutBusinessInput.schema';
import { SaleUpdateManyWithWhereWithoutBusinessInputObjectSchema } from './SaleUpdateManyWithWhereWithoutBusinessInput.schema';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutBusinessNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => SaleUpsertWithWhereUniqueWithoutBusinessInputObjectSchema,
          ),
          z
            .lazy(
              () => SaleUpsertWithWhereUniqueWithoutBusinessInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SaleCreateManyBusinessInputEnvelopeObjectSchema)
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
          z.lazy(
            () => SaleUpdateWithWhereUniqueWithoutBusinessInputObjectSchema,
          ),
          z
            .lazy(
              () => SaleUpdateWithWhereUniqueWithoutBusinessInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SaleUpdateManyWithWhereWithoutBusinessInputObjectSchema),
          z
            .lazy(() => SaleUpdateManyWithWhereWithoutBusinessInputObjectSchema)
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

export const SaleUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema =
  Schema;

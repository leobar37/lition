import { z } from 'zod';
import { SaleCreateWithoutProductInputObjectSchema } from './SaleCreateWithoutProductInput.schema';
import { SaleUncheckedCreateWithoutProductInputObjectSchema } from './SaleUncheckedCreateWithoutProductInput.schema';
import { SaleCreateOrConnectWithoutProductInputObjectSchema } from './SaleCreateOrConnectWithoutProductInput.schema';
import { SaleUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutProductInput.schema';
import { SaleCreateManyProductInputEnvelopeObjectSchema } from './SaleCreateManyProductInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutProductInput.schema';
import { SaleUpdateManyWithWhereWithoutProductInputObjectSchema } from './SaleUpdateManyWithWhereWithoutProductInput.schema';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateManyWithoutProductNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => SaleUpsertWithWhereUniqueWithoutProductInputObjectSchema),
        z
          .lazy(() => SaleUpsertWithWhereUniqueWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SaleCreateManyProductInputEnvelopeObjectSchema)
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
        z.lazy(() => SaleUpdateWithWhereUniqueWithoutProductInputObjectSchema),
        z
          .lazy(() => SaleUpdateWithWhereUniqueWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SaleUpdateManyWithWhereWithoutProductInputObjectSchema),
        z
          .lazy(() => SaleUpdateManyWithWhereWithoutProductInputObjectSchema)
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

export const SaleUpdateManyWithoutProductNestedInputObjectSchema = Schema;

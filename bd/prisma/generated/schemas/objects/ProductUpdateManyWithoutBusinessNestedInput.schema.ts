import { z } from 'zod';
import { ProductCreateWithoutBusinessInputObjectSchema } from './ProductCreateWithoutBusinessInput.schema';
import { ProductUncheckedCreateWithoutBusinessInputObjectSchema } from './ProductUncheckedCreateWithoutBusinessInput.schema';
import { ProductCreateOrConnectWithoutBusinessInputObjectSchema } from './ProductCreateOrConnectWithoutBusinessInput.schema';
import { ProductUpsertWithWhereUniqueWithoutBusinessInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutBusinessInput.schema';
import { ProductCreateManyBusinessInputEnvelopeObjectSchema } from './ProductCreateManyBusinessInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutBusinessInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutBusinessInput.schema';
import { ProductUpdateManyWithWhereWithoutBusinessInputObjectSchema } from './ProductUpdateManyWithWhereWithoutBusinessInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateManyWithoutBusinessNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutBusinessInputObjectSchema),
        z.lazy(() => ProductCreateWithoutBusinessInputObjectSchema).array(),
        z.lazy(() => ProductUncheckedCreateWithoutBusinessInputObjectSchema),
        z
          .lazy(() => ProductUncheckedCreateWithoutBusinessInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductCreateOrConnectWithoutBusinessInputObjectSchema),
        z
          .lazy(() => ProductCreateOrConnectWithoutBusinessInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ProductUpsertWithWhereUniqueWithoutBusinessInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductUpsertWithWhereUniqueWithoutBusinessInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProductCreateManyBusinessInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ProductUpdateWithWhereUniqueWithoutBusinessInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductUpdateWithWhereUniqueWithoutBusinessInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ProductUpdateManyWithWhereWithoutBusinessInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductUpdateManyWithWhereWithoutBusinessInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProductScalarWhereInputObjectSchema),
        z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateManyWithoutBusinessNestedInputObjectSchema = Schema;

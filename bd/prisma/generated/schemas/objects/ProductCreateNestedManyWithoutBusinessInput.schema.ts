import { z } from 'zod';
import { ProductCreateWithoutBusinessInputObjectSchema } from './ProductCreateWithoutBusinessInput.schema';
import { ProductUncheckedCreateWithoutBusinessInputObjectSchema } from './ProductUncheckedCreateWithoutBusinessInput.schema';
import { ProductCreateOrConnectWithoutBusinessInputObjectSchema } from './ProductCreateOrConnectWithoutBusinessInput.schema';
import { ProductCreateManyBusinessInputEnvelopeObjectSchema } from './ProductCreateManyBusinessInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedManyWithoutBusinessInput> = z
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
    createMany: z
      .lazy(() => ProductCreateManyBusinessInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductCreateNestedManyWithoutBusinessInputObjectSchema = Schema;

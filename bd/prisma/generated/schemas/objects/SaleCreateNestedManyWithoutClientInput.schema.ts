import { z } from 'zod';
import { SaleCreateWithoutClientInputObjectSchema } from './SaleCreateWithoutClientInput.schema';
import { SaleUncheckedCreateWithoutClientInputObjectSchema } from './SaleUncheckedCreateWithoutClientInput.schema';
import { SaleCreateOrConnectWithoutClientInputObjectSchema } from './SaleCreateOrConnectWithoutClientInput.schema';
import { SaleCreateManyClientInputEnvelopeObjectSchema } from './SaleCreateManyClientInputEnvelope.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateNestedManyWithoutClientInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SaleCreateWithoutClientInputObjectSchema),
        z.lazy(() => SaleCreateWithoutClientInputObjectSchema).array(),
        z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema),
        z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SaleCreateOrConnectWithoutClientInputObjectSchema),
        z.lazy(() => SaleCreateOrConnectWithoutClientInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SaleCreateManyClientInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => SaleWhereUniqueInputObjectSchema),
        z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const SaleCreateNestedManyWithoutClientInputObjectSchema = Schema;

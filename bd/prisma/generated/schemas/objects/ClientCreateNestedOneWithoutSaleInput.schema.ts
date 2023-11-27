import { z } from 'zod';
import { ClientCreateWithoutSaleInputObjectSchema } from './ClientCreateWithoutSaleInput.schema';
import { ClientUncheckedCreateWithoutSaleInputObjectSchema } from './ClientUncheckedCreateWithoutSaleInput.schema';
import { ClientCreateOrConnectWithoutSaleInputObjectSchema } from './ClientCreateOrConnectWithoutSaleInput.schema';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateNestedOneWithoutSaleInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ClientCreateWithoutSaleInputObjectSchema),
        z.lazy(() => ClientUncheckedCreateWithoutSaleInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ClientCreateOrConnectWithoutSaleInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ClientCreateNestedOneWithoutSaleInputObjectSchema = Schema;

import { z } from 'zod';
import { ClientCreateWithoutSaleInputObjectSchema } from './ClientCreateWithoutSaleInput.schema';
import { ClientUncheckedCreateWithoutSaleInputObjectSchema } from './ClientUncheckedCreateWithoutSaleInput.schema';
import { ClientCreateOrConnectWithoutSaleInputObjectSchema } from './ClientCreateOrConnectWithoutSaleInput.schema';
import { ClientUpsertWithoutSaleInputObjectSchema } from './ClientUpsertWithoutSaleInput.schema';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateWithoutSaleInputObjectSchema } from './ClientUpdateWithoutSaleInput.schema';
import { ClientUncheckedUpdateWithoutSaleInputObjectSchema } from './ClientUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUpdateOneWithoutSaleNestedInput> = z
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
    upsert: z.lazy(() => ClientUpsertWithoutSaleInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ClientWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ClientUpdateWithoutSaleInputObjectSchema),
        z.lazy(() => ClientUncheckedUpdateWithoutSaleInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ClientUpdateOneWithoutSaleNestedInputObjectSchema = Schema;

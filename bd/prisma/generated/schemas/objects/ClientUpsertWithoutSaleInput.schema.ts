import { z } from 'zod';
import { ClientUpdateWithoutSaleInputObjectSchema } from './ClientUpdateWithoutSaleInput.schema';
import { ClientUncheckedUpdateWithoutSaleInputObjectSchema } from './ClientUncheckedUpdateWithoutSaleInput.schema';
import { ClientCreateWithoutSaleInputObjectSchema } from './ClientCreateWithoutSaleInput.schema';
import { ClientUncheckedCreateWithoutSaleInputObjectSchema } from './ClientUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUpsertWithoutSaleInput> = z
  .object({
    update: z.union([
      z.lazy(() => ClientUpdateWithoutSaleInputObjectSchema),
      z.lazy(() => ClientUncheckedUpdateWithoutSaleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ClientCreateWithoutSaleInputObjectSchema),
      z.lazy(() => ClientUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const ClientUpsertWithoutSaleInputObjectSchema = Schema;

import { z } from 'zod';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutSaleInputObjectSchema } from './ClientCreateWithoutSaleInput.schema';
import { ClientUncheckedCreateWithoutSaleInputObjectSchema } from './ClientUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ClientCreateWithoutSaleInputObjectSchema),
      z.lazy(() => ClientUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const ClientCreateOrConnectWithoutSaleInputObjectSchema = Schema;

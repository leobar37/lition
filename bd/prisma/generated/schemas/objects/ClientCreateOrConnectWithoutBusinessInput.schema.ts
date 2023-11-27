import { z } from 'zod';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientCreateWithoutBusinessInputObjectSchema } from './ClientCreateWithoutBusinessInput.schema';
import { ClientUncheckedCreateWithoutBusinessInputObjectSchema } from './ClientUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientCreateOrConnectWithoutBusinessInput> = z
  .object({
    where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ClientCreateWithoutBusinessInputObjectSchema),
      z.lazy(() => ClientUncheckedCreateWithoutBusinessInputObjectSchema),
    ]),
  })
  .strict();

export const ClientCreateOrConnectWithoutBusinessInputObjectSchema = Schema;

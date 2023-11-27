import { z } from 'zod';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateWithoutBusinessInputObjectSchema } from './ClientUpdateWithoutBusinessInput.schema';
import { ClientUncheckedUpdateWithoutBusinessInputObjectSchema } from './ClientUncheckedUpdateWithoutBusinessInput.schema';
import { ClientCreateWithoutBusinessInputObjectSchema } from './ClientCreateWithoutBusinessInput.schema';
import { ClientUncheckedCreateWithoutBusinessInputObjectSchema } from './ClientUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUpsertWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ClientUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => ClientUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ClientCreateWithoutBusinessInputObjectSchema),
        z.lazy(() => ClientUncheckedCreateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const ClientUpsertWithWhereUniqueWithoutBusinessInputObjectSchema =
  Schema;

import { z } from 'zod';
import { ClientWhereUniqueInputObjectSchema } from './ClientWhereUniqueInput.schema';
import { ClientUpdateWithoutBusinessInputObjectSchema } from './ClientUpdateWithoutBusinessInput.schema';
import { ClientUncheckedUpdateWithoutBusinessInputObjectSchema } from './ClientUncheckedUpdateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUpdateWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => ClientWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ClientUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => ClientUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const ClientUpdateWithWhereUniqueWithoutBusinessInputObjectSchema =
  Schema;

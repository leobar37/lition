import { z } from 'zod';
import { ClientScalarWhereInputObjectSchema } from './ClientScalarWhereInput.schema';
import { ClientUpdateManyMutationInputObjectSchema } from './ClientUpdateManyMutationInput.schema';
import { ClientUncheckedUpdateManyWithoutClientsInputObjectSchema } from './ClientUncheckedUpdateManyWithoutClientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUpdateManyWithWhereWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => ClientScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ClientUpdateManyMutationInputObjectSchema),
        z.lazy(() => ClientUncheckedUpdateManyWithoutClientsInputObjectSchema),
      ]),
    })
    .strict();

export const ClientUpdateManyWithWhereWithoutBusinessInputObjectSchema = Schema;

import { z } from 'zod';
import { UserCreateManyBusinessInputObjectSchema } from './UserCreateManyBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyBusinessInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UserCreateManyBusinessInputObjectSchema),
      z.lazy(() => UserCreateManyBusinessInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyBusinessInputEnvelopeObjectSchema = Schema;

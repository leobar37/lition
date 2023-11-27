import { z } from 'zod';
import { UnitAliasCreateManyProductInputObjectSchema } from './UnitAliasCreateManyProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UnitAliasCreateManyProductInputObjectSchema),
      z.lazy(() => UnitAliasCreateManyProductInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UnitAliasCreateManyProductInputEnvelopeObjectSchema = Schema;

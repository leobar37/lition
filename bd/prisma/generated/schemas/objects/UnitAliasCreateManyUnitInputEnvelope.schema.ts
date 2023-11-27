import { z } from 'zod';
import { UnitAliasCreateManyUnitInputObjectSchema } from './UnitAliasCreateManyUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateManyUnitInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UnitAliasCreateManyUnitInputObjectSchema),
      z.lazy(() => UnitAliasCreateManyUnitInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UnitAliasCreateManyUnitInputEnvelopeObjectSchema = Schema;

import { z } from 'zod';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';
import { UnitAliasCreateWithoutProductInputObjectSchema } from './UnitAliasCreateWithoutProductInput.schema';
import { UnitAliasUncheckedCreateWithoutProductInputObjectSchema } from './UnitAliasUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UnitAliasCreateWithoutProductInputObjectSchema),
      z.lazy(() => UnitAliasUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const UnitAliasCreateOrConnectWithoutProductInputObjectSchema = Schema;

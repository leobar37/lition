import { z } from 'zod';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';
import { UnitAliasCreateWithoutUnitInputObjectSchema } from './UnitAliasCreateWithoutUnitInput.schema';
import { UnitAliasUncheckedCreateWithoutUnitInputObjectSchema } from './UnitAliasUncheckedCreateWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasCreateOrConnectWithoutUnitInput> = z
  .object({
    where: z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UnitAliasCreateWithoutUnitInputObjectSchema),
      z.lazy(() => UnitAliasUncheckedCreateWithoutUnitInputObjectSchema),
    ]),
  })
  .strict();

export const UnitAliasCreateOrConnectWithoutUnitInputObjectSchema = Schema;

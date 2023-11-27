import { z } from 'zod';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitCreateWithoutUnitAliasInputObjectSchema } from './UnitCreateWithoutUnitAliasInput.schema';
import { UnitUncheckedCreateWithoutUnitAliasInputObjectSchema } from './UnitUncheckedCreateWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateOrConnectWithoutUnitAliasInput> = z
  .object({
    where: z.lazy(() => UnitWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UnitCreateWithoutUnitAliasInputObjectSchema),
      z.lazy(() => UnitUncheckedCreateWithoutUnitAliasInputObjectSchema),
    ]),
  })
  .strict();

export const UnitCreateOrConnectWithoutUnitAliasInputObjectSchema = Schema;

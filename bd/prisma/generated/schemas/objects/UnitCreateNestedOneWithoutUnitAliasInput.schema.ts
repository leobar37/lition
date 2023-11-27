import { z } from 'zod';
import { UnitCreateWithoutUnitAliasInputObjectSchema } from './UnitCreateWithoutUnitAliasInput.schema';
import { UnitUncheckedCreateWithoutUnitAliasInputObjectSchema } from './UnitUncheckedCreateWithoutUnitAliasInput.schema';
import { UnitCreateOrConnectWithoutUnitAliasInputObjectSchema } from './UnitCreateOrConnectWithoutUnitAliasInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateNestedOneWithoutUnitAliasInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UnitCreateWithoutUnitAliasInputObjectSchema),
        z.lazy(() => UnitUncheckedCreateWithoutUnitAliasInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UnitCreateOrConnectWithoutUnitAliasInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UnitWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UnitCreateNestedOneWithoutUnitAliasInputObjectSchema = Schema;

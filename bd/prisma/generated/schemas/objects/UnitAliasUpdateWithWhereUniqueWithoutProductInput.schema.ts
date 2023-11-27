import { z } from 'zod';
import { UnitAliasWhereUniqueInputObjectSchema } from './UnitAliasWhereUniqueInput.schema';
import { UnitAliasUpdateWithoutProductInputObjectSchema } from './UnitAliasUpdateWithoutProductInput.schema';
import { UnitAliasUncheckedUpdateWithoutProductInputObjectSchema } from './UnitAliasUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => UnitAliasWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UnitAliasUpdateWithoutProductInputObjectSchema),
        z.lazy(() => UnitAliasUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const UnitAliasUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;

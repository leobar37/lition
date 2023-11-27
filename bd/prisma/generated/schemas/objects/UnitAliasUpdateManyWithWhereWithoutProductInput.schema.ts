import { z } from 'zod';
import { UnitAliasScalarWhereInputObjectSchema } from './UnitAliasScalarWhereInput.schema';
import { UnitAliasUpdateManyMutationInputObjectSchema } from './UnitAliasUpdateManyMutationInput.schema';
import { UnitAliasUncheckedUpdateManyWithoutUnitAliasInputObjectSchema } from './UnitAliasUncheckedUpdateManyWithoutUnitAliasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitAliasUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => UnitAliasScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UnitAliasUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => UnitAliasUncheckedUpdateManyWithoutUnitAliasInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UnitAliasUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;

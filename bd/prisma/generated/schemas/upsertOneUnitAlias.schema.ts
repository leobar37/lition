import { z } from 'zod';
import { UnitAliasWhereUniqueInputObjectSchema } from './objects/UnitAliasWhereUniqueInput.schema';
import { UnitAliasCreateInputObjectSchema } from './objects/UnitAliasCreateInput.schema';
import { UnitAliasUncheckedCreateInputObjectSchema } from './objects/UnitAliasUncheckedCreateInput.schema';
import { UnitAliasUpdateInputObjectSchema } from './objects/UnitAliasUpdateInput.schema';
import { UnitAliasUncheckedUpdateInputObjectSchema } from './objects/UnitAliasUncheckedUpdateInput.schema';

export const UnitAliasUpsertSchema = z.object({
  where: UnitAliasWhereUniqueInputObjectSchema,
  create: z.union([
    UnitAliasCreateInputObjectSchema,
    UnitAliasUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    UnitAliasUpdateInputObjectSchema,
    UnitAliasUncheckedUpdateInputObjectSchema,
  ]),
});

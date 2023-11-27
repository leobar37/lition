import { z } from 'zod';
import { UnitAliasUpdateInputObjectSchema } from './objects/UnitAliasUpdateInput.schema';
import { UnitAliasUncheckedUpdateInputObjectSchema } from './objects/UnitAliasUncheckedUpdateInput.schema';
import { UnitAliasWhereUniqueInputObjectSchema } from './objects/UnitAliasWhereUniqueInput.schema';

export const UnitAliasUpdateOneSchema = z.object({
  data: z.union([
    UnitAliasUpdateInputObjectSchema,
    UnitAliasUncheckedUpdateInputObjectSchema,
  ]),
  where: UnitAliasWhereUniqueInputObjectSchema,
});

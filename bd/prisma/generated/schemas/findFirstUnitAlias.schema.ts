import { z } from 'zod';
import { UnitAliasOrderByWithRelationInputObjectSchema } from './objects/UnitAliasOrderByWithRelationInput.schema';
import { UnitAliasWhereInputObjectSchema } from './objects/UnitAliasWhereInput.schema';
import { UnitAliasWhereUniqueInputObjectSchema } from './objects/UnitAliasWhereUniqueInput.schema';
import { UnitAliasScalarFieldEnumSchema } from './enums/UnitAliasScalarFieldEnum.schema';

export const UnitAliasFindFirstSchema = z.object({
  orderBy: z
    .union([
      UnitAliasOrderByWithRelationInputObjectSchema,
      UnitAliasOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UnitAliasWhereInputObjectSchema.optional(),
  cursor: UnitAliasWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UnitAliasScalarFieldEnumSchema).optional(),
});

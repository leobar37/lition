import { z } from 'zod';
import { UnitAliasWhereInputObjectSchema } from './objects/UnitAliasWhereInput.schema';
import { UnitAliasOrderByWithAggregationInputObjectSchema } from './objects/UnitAliasOrderByWithAggregationInput.schema';
import { UnitAliasScalarWhereWithAggregatesInputObjectSchema } from './objects/UnitAliasScalarWhereWithAggregatesInput.schema';
import { UnitAliasScalarFieldEnumSchema } from './enums/UnitAliasScalarFieldEnum.schema';

export const UnitAliasGroupBySchema = z.object({
  where: UnitAliasWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UnitAliasOrderByWithAggregationInputObjectSchema,
      UnitAliasOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UnitAliasScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UnitAliasScalarFieldEnumSchema),
});

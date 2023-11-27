import { z } from 'zod';
import { UnitAliasOrderByWithRelationInputObjectSchema } from './objects/UnitAliasOrderByWithRelationInput.schema';
import { UnitAliasWhereInputObjectSchema } from './objects/UnitAliasWhereInput.schema';
import { UnitAliasWhereUniqueInputObjectSchema } from './objects/UnitAliasWhereUniqueInput.schema';
import { UnitAliasCountAggregateInputObjectSchema } from './objects/UnitAliasCountAggregateInput.schema';
import { UnitAliasMinAggregateInputObjectSchema } from './objects/UnitAliasMinAggregateInput.schema';
import { UnitAliasMaxAggregateInputObjectSchema } from './objects/UnitAliasMaxAggregateInput.schema';
import { UnitAliasAvgAggregateInputObjectSchema } from './objects/UnitAliasAvgAggregateInput.schema';
import { UnitAliasSumAggregateInputObjectSchema } from './objects/UnitAliasSumAggregateInput.schema';

export const UnitAliasAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), UnitAliasCountAggregateInputObjectSchema])
    .optional(),
  _min: UnitAliasMinAggregateInputObjectSchema.optional(),
  _max: UnitAliasMaxAggregateInputObjectSchema.optional(),
  _avg: UnitAliasAvgAggregateInputObjectSchema.optional(),
  _sum: UnitAliasSumAggregateInputObjectSchema.optional(),
});

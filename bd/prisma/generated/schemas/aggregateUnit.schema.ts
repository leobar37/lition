import { z } from 'zod';
import { UnitOrderByWithRelationInputObjectSchema } from './objects/UnitOrderByWithRelationInput.schema';
import { UnitWhereInputObjectSchema } from './objects/UnitWhereInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './objects/UnitWhereUniqueInput.schema';
import { UnitCountAggregateInputObjectSchema } from './objects/UnitCountAggregateInput.schema';
import { UnitMinAggregateInputObjectSchema } from './objects/UnitMinAggregateInput.schema';
import { UnitMaxAggregateInputObjectSchema } from './objects/UnitMaxAggregateInput.schema';
import { UnitAvgAggregateInputObjectSchema } from './objects/UnitAvgAggregateInput.schema';
import { UnitSumAggregateInputObjectSchema } from './objects/UnitSumAggregateInput.schema';

export const UnitAggregateSchema = z.object({
  orderBy: z
    .union([
      UnitOrderByWithRelationInputObjectSchema,
      UnitOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UnitWhereInputObjectSchema.optional(),
  cursor: UnitWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), UnitCountAggregateInputObjectSchema])
    .optional(),
  _min: UnitMinAggregateInputObjectSchema.optional(),
  _max: UnitMaxAggregateInputObjectSchema.optional(),
  _avg: UnitAvgAggregateInputObjectSchema.optional(),
  _sum: UnitSumAggregateInputObjectSchema.optional(),
});

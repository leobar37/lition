import { z } from 'zod';
import { BusinessOrderByWithRelationInputObjectSchema } from './objects/BusinessOrderByWithRelationInput.schema';
import { BusinessWhereInputObjectSchema } from './objects/BusinessWhereInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './objects/BusinessWhereUniqueInput.schema';
import { BusinessCountAggregateInputObjectSchema } from './objects/BusinessCountAggregateInput.schema';
import { BusinessMinAggregateInputObjectSchema } from './objects/BusinessMinAggregateInput.schema';
import { BusinessMaxAggregateInputObjectSchema } from './objects/BusinessMaxAggregateInput.schema';
import { BusinessAvgAggregateInputObjectSchema } from './objects/BusinessAvgAggregateInput.schema';
import { BusinessSumAggregateInputObjectSchema } from './objects/BusinessSumAggregateInput.schema';

export const BusinessAggregateSchema = z.object({
  orderBy: z
    .union([
      BusinessOrderByWithRelationInputObjectSchema,
      BusinessOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BusinessWhereInputObjectSchema.optional(),
  cursor: BusinessWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BusinessCountAggregateInputObjectSchema])
    .optional(),
  _min: BusinessMinAggregateInputObjectSchema.optional(),
  _max: BusinessMaxAggregateInputObjectSchema.optional(),
  _avg: BusinessAvgAggregateInputObjectSchema.optional(),
  _sum: BusinessSumAggregateInputObjectSchema.optional(),
});

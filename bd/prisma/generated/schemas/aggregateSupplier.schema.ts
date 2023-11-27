import { z } from 'zod';
import { SupplierOrderByWithRelationInputObjectSchema } from './objects/SupplierOrderByWithRelationInput.schema';
import { SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';
import { SupplierCountAggregateInputObjectSchema } from './objects/SupplierCountAggregateInput.schema';
import { SupplierMinAggregateInputObjectSchema } from './objects/SupplierMinAggregateInput.schema';
import { SupplierMaxAggregateInputObjectSchema } from './objects/SupplierMaxAggregateInput.schema';
import { SupplierAvgAggregateInputObjectSchema } from './objects/SupplierAvgAggregateInput.schema';
import { SupplierSumAggregateInputObjectSchema } from './objects/SupplierSumAggregateInput.schema';

export const SupplierAggregateSchema = z.object({
  orderBy: z
    .union([
      SupplierOrderByWithRelationInputObjectSchema,
      SupplierOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SupplierWhereInputObjectSchema.optional(),
  cursor: SupplierWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SupplierCountAggregateInputObjectSchema])
    .optional(),
  _min: SupplierMinAggregateInputObjectSchema.optional(),
  _max: SupplierMaxAggregateInputObjectSchema.optional(),
  _avg: SupplierAvgAggregateInputObjectSchema.optional(),
  _sum: SupplierSumAggregateInputObjectSchema.optional(),
});

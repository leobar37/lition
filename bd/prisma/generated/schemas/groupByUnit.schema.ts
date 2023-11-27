import { z } from 'zod';
import { UnitWhereInputObjectSchema } from './objects/UnitWhereInput.schema';
import { UnitOrderByWithAggregationInputObjectSchema } from './objects/UnitOrderByWithAggregationInput.schema';
import { UnitScalarWhereWithAggregatesInputObjectSchema } from './objects/UnitScalarWhereWithAggregatesInput.schema';
import { UnitScalarFieldEnumSchema } from './enums/UnitScalarFieldEnum.schema';

export const UnitGroupBySchema = z.object({
  where: UnitWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UnitOrderByWithAggregationInputObjectSchema,
      UnitOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UnitScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UnitScalarFieldEnumSchema),
});

import { z } from 'zod';
import { BusinessWhereInputObjectSchema } from './objects/BusinessWhereInput.schema';
import { BusinessOrderByWithAggregationInputObjectSchema } from './objects/BusinessOrderByWithAggregationInput.schema';
import { BusinessScalarWhereWithAggregatesInputObjectSchema } from './objects/BusinessScalarWhereWithAggregatesInput.schema';
import { BusinessScalarFieldEnumSchema } from './enums/BusinessScalarFieldEnum.schema';

export const BusinessGroupBySchema = z.object({
  where: BusinessWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BusinessOrderByWithAggregationInputObjectSchema,
      BusinessOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BusinessScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BusinessScalarFieldEnumSchema),
});

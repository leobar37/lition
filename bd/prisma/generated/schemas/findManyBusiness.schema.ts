import { z } from 'zod';
import { BusinessOrderByWithRelationInputObjectSchema } from './objects/BusinessOrderByWithRelationInput.schema';
import { BusinessWhereInputObjectSchema } from './objects/BusinessWhereInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './objects/BusinessWhereUniqueInput.schema';
import { BusinessScalarFieldEnumSchema } from './enums/BusinessScalarFieldEnum.schema';

export const BusinessFindManySchema = z.object({
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
  distinct: z.array(BusinessScalarFieldEnumSchema).optional(),
});

import { z } from 'zod';
import { BusinessUpdateManyMutationInputObjectSchema } from './objects/BusinessUpdateManyMutationInput.schema';
import { BusinessWhereInputObjectSchema } from './objects/BusinessWhereInput.schema';

export const BusinessUpdateManySchema = z.object({
  data: BusinessUpdateManyMutationInputObjectSchema,
  where: BusinessWhereInputObjectSchema.optional(),
});

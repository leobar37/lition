import { z } from 'zod';
import { BusinessWhereInputObjectSchema } from './objects/BusinessWhereInput.schema';

export const BusinessDeleteManySchema = z.object({
  where: BusinessWhereInputObjectSchema.optional(),
});

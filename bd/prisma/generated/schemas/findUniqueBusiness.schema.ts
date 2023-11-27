import { z } from 'zod';
import { BusinessWhereUniqueInputObjectSchema } from './objects/BusinessWhereUniqueInput.schema';

export const BusinessFindUniqueSchema = z.object({
  where: BusinessWhereUniqueInputObjectSchema,
});

import { z } from 'zod';
import { BusinessWhereUniqueInputObjectSchema } from './objects/BusinessWhereUniqueInput.schema';

export const BusinessDeleteOneSchema = z.object({
  where: BusinessWhereUniqueInputObjectSchema,
});

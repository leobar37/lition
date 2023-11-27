import { z } from 'zod';
import { BusinessCreateManyInputObjectSchema } from './objects/BusinessCreateManyInput.schema';

export const BusinessCreateManySchema = z.object({
  data: z.union([
    BusinessCreateManyInputObjectSchema,
    z.array(BusinessCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

import { z } from 'zod';
import { SupplierCreateManyInputObjectSchema } from './objects/SupplierCreateManyInput.schema';

export const SupplierCreateManySchema = z.object({
  data: z.union([
    SupplierCreateManyInputObjectSchema,
    z.array(SupplierCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

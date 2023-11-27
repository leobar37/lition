import { z } from 'zod';
import { SupplierCreateInputObjectSchema } from './objects/SupplierCreateInput.schema';
import { SupplierUncheckedCreateInputObjectSchema } from './objects/SupplierUncheckedCreateInput.schema';

export const SupplierCreateOneSchema = z.object({
  data: z.union([
    SupplierCreateInputObjectSchema,
    SupplierUncheckedCreateInputObjectSchema,
  ]),
});

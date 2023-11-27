import { z } from 'zod';
import { SupplierUpdateInputObjectSchema } from './objects/SupplierUpdateInput.schema';
import { SupplierUncheckedUpdateInputObjectSchema } from './objects/SupplierUncheckedUpdateInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';

export const SupplierUpdateOneSchema = z.object({
  data: z.union([
    SupplierUpdateInputObjectSchema,
    SupplierUncheckedUpdateInputObjectSchema,
  ]),
  where: SupplierWhereUniqueInputObjectSchema,
});

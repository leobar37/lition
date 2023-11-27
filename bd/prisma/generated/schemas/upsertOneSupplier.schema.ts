import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';
import { SupplierCreateInputObjectSchema } from './objects/SupplierCreateInput.schema';
import { SupplierUncheckedCreateInputObjectSchema } from './objects/SupplierUncheckedCreateInput.schema';
import { SupplierUpdateInputObjectSchema } from './objects/SupplierUpdateInput.schema';
import { SupplierUncheckedUpdateInputObjectSchema } from './objects/SupplierUncheckedUpdateInput.schema';

export const SupplierUpsertSchema = z.object({
  where: SupplierWhereUniqueInputObjectSchema,
  create: z.union([
    SupplierCreateInputObjectSchema,
    SupplierUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SupplierUpdateInputObjectSchema,
    SupplierUncheckedUpdateInputObjectSchema,
  ]),
});

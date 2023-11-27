import { z } from 'zod';
import { SupplierOrderByWithRelationInputObjectSchema } from './objects/SupplierOrderByWithRelationInput.schema';
import { SupplierWhereInputObjectSchema } from './objects/SupplierWhereInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './objects/SupplierWhereUniqueInput.schema';
import { SupplierScalarFieldEnumSchema } from './enums/SupplierScalarFieldEnum.schema';

export const SupplierFindManySchema = z.object({
  orderBy: z
    .union([
      SupplierOrderByWithRelationInputObjectSchema,
      SupplierOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SupplierWhereInputObjectSchema.optional(),
  cursor: SupplierWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SupplierScalarFieldEnumSchema).optional(),
});

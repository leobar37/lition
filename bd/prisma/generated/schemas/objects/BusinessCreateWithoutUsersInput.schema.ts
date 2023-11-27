import { z } from 'zod';
import { ClientCreateNestedManyWithoutBusinessInputObjectSchema } from './ClientCreateNestedManyWithoutBusinessInput.schema';
import { SupplierCreateNestedManyWithoutBusinessInputObjectSchema } from './SupplierCreateNestedManyWithoutBusinessInput.schema';
import { ProductCreateNestedManyWithoutBusinessInputObjectSchema } from './ProductCreateNestedManyWithoutBusinessInput.schema';
import { SaleCreateNestedManyWithoutBusinessInputObjectSchema } from './SaleCreateNestedManyWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateWithoutUsersInput> = z
  .object({
    name: z.string(),
    code: z.string().optional().nullable(),
    clients: z
      .lazy(() => ClientCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    suppliers: z
      .lazy(() => SupplierCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    sales: z
      .lazy(() => SaleCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
  })
  .strict();

export const BusinessCreateWithoutUsersInputObjectSchema = Schema;

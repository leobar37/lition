import { z } from 'zod';
import { UserCreateNestedManyWithoutBusinessInputObjectSchema } from './UserCreateNestedManyWithoutBusinessInput.schema';
import { ClientCreateNestedManyWithoutBusinessInputObjectSchema } from './ClientCreateNestedManyWithoutBusinessInput.schema';
import { SupplierCreateNestedManyWithoutBusinessInputObjectSchema } from './SupplierCreateNestedManyWithoutBusinessInput.schema';
import { SaleCreateNestedManyWithoutBusinessInputObjectSchema } from './SaleCreateNestedManyWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateWithoutProductsInput> = z
  .object({
    name: z.string(),
    code: z.string().optional().nullable(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    clients: z
      .lazy(() => ClientCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    suppliers: z
      .lazy(() => SupplierCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    sales: z
      .lazy(() => SaleCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
  })
  .strict();

export const BusinessCreateWithoutProductsInputObjectSchema = Schema;

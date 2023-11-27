import { z } from 'zod';
import { UserCreateNestedManyWithoutBusinessInputObjectSchema } from './UserCreateNestedManyWithoutBusinessInput.schema';
import { ClientCreateNestedManyWithoutBusinessInputObjectSchema } from './ClientCreateNestedManyWithoutBusinessInput.schema';
import { ProductCreateNestedManyWithoutBusinessInputObjectSchema } from './ProductCreateNestedManyWithoutBusinessInput.schema';
import { SaleCreateNestedManyWithoutBusinessInputObjectSchema } from './SaleCreateNestedManyWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessCreateWithoutSuppliersInput> = z
  .object({
    name: z.string(),
    code: z.string().optional().nullable(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    clients: z
      .lazy(() => ClientCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    sales: z
      .lazy(() => SaleCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
  })
  .strict();

export const BusinessCreateWithoutSuppliersInputObjectSchema = Schema;

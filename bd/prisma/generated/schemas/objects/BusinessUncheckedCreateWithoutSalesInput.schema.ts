import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { ClientUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './ClientUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { SupplierUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './SupplierUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { ProductUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutSalesInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    code: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    users: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
    clients: z
      .lazy(
        () => ClientUncheckedCreateNestedManyWithoutBusinessInputObjectSchema,
      )
      .optional(),
    suppliers: z
      .lazy(
        () => SupplierUncheckedCreateNestedManyWithoutBusinessInputObjectSchema,
      )
      .optional(),
    products: z
      .lazy(
        () => ProductUncheckedCreateNestedManyWithoutBusinessInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BusinessUncheckedCreateWithoutSalesInputObjectSchema = Schema;

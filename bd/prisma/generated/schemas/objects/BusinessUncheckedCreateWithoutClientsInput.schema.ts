import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { SupplierUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './SupplierUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { ProductUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { SaleUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutClientsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    code: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    users: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutBusinessInputObjectSchema)
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
    sales: z
      .lazy(() => SaleUncheckedCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
  })
  .strict();

export const BusinessUncheckedCreateWithoutClientsInputObjectSchema = Schema;

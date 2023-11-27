import { z } from 'zod';
import { ClientUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './ClientUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { SupplierUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './SupplierUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { ProductUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { SaleUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    code: z.string().optional().nullable(),
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
    sales: z
      .lazy(() => SaleUncheckedCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
  })
  .strict();

export const BusinessUncheckedCreateWithoutUsersInputObjectSchema = Schema;

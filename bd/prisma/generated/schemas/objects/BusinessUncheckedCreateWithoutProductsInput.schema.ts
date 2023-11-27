import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { ClientUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './ClientUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { SupplierUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './SupplierUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { SaleUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutProductsInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    code: z.string().optional().nullable(),
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
    sales: z
      .lazy(() => SaleUncheckedCreateNestedManyWithoutBusinessInputObjectSchema)
      .optional(),
  })
  .strict();

export const BusinessUncheckedCreateWithoutProductsInputObjectSchema = Schema;

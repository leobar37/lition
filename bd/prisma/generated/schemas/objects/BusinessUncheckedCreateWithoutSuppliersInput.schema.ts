import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { ClientUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './ClientUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { ProductUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutBusinessInput.schema';
import { SaleUncheckedCreateNestedManyWithoutBusinessInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutSuppliersInput> = z
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

export const BusinessUncheckedCreateWithoutSuppliersInputObjectSchema = Schema;

import { z } from 'zod';
import { SupplierScalarWhereInputObjectSchema } from './SupplierScalarWhereInput.schema';
import { SupplierUpdateManyMutationInputObjectSchema } from './SupplierUpdateManyMutationInput.schema';
import { SupplierUncheckedUpdateManyWithoutSuppliersInputObjectSchema } from './SupplierUncheckedUpdateManyWithoutSuppliersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpdateManyWithWhereWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => SupplierScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SupplierUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => SupplierUncheckedUpdateManyWithoutSuppliersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SupplierUpdateManyWithWhereWithoutBusinessInputObjectSchema =
  Schema;

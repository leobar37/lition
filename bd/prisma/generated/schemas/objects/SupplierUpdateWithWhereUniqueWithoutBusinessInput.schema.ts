import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateWithoutBusinessInputObjectSchema } from './SupplierUpdateWithoutBusinessInput.schema';
import { SupplierUncheckedUpdateWithoutBusinessInputObjectSchema } from './SupplierUncheckedUpdateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpdateWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SupplierUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => SupplierUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const SupplierUpdateWithWhereUniqueWithoutBusinessInputObjectSchema =
  Schema;

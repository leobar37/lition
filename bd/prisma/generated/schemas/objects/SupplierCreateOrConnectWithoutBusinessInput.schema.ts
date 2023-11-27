import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierCreateWithoutBusinessInputObjectSchema } from './SupplierCreateWithoutBusinessInput.schema';
import { SupplierUncheckedCreateWithoutBusinessInputObjectSchema } from './SupplierUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateOrConnectWithoutBusinessInput> = z
  .object({
    where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SupplierCreateWithoutBusinessInputObjectSchema),
      z.lazy(() => SupplierUncheckedCreateWithoutBusinessInputObjectSchema),
    ]),
  })
  .strict();

export const SupplierCreateOrConnectWithoutBusinessInputObjectSchema = Schema;

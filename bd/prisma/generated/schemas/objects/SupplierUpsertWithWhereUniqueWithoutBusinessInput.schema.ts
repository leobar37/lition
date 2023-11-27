import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateWithoutBusinessInputObjectSchema } from './SupplierUpdateWithoutBusinessInput.schema';
import { SupplierUncheckedUpdateWithoutBusinessInputObjectSchema } from './SupplierUncheckedUpdateWithoutBusinessInput.schema';
import { SupplierCreateWithoutBusinessInputObjectSchema } from './SupplierCreateWithoutBusinessInput.schema';
import { SupplierUncheckedCreateWithoutBusinessInputObjectSchema } from './SupplierUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpsertWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SupplierUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => SupplierUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SupplierCreateWithoutBusinessInputObjectSchema),
        z.lazy(() => SupplierUncheckedCreateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const SupplierUpsertWithWhereUniqueWithoutBusinessInputObjectSchema =
  Schema;

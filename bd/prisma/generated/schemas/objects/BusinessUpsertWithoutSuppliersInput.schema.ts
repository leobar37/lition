import { z } from 'zod';
import { BusinessUpdateWithoutSuppliersInputObjectSchema } from './BusinessUpdateWithoutSuppliersInput.schema';
import { BusinessUncheckedUpdateWithoutSuppliersInputObjectSchema } from './BusinessUncheckedUpdateWithoutSuppliersInput.schema';
import { BusinessCreateWithoutSuppliersInputObjectSchema } from './BusinessCreateWithoutSuppliersInput.schema';
import { BusinessUncheckedCreateWithoutSuppliersInputObjectSchema } from './BusinessUncheckedCreateWithoutSuppliersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpsertWithoutSuppliersInput> = z
  .object({
    update: z.union([
      z.lazy(() => BusinessUpdateWithoutSuppliersInputObjectSchema),
      z.lazy(() => BusinessUncheckedUpdateWithoutSuppliersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutSuppliersInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutSuppliersInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessUpsertWithoutSuppliersInputObjectSchema = Schema;

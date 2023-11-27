import { z } from 'zod';
import { BusinessUpdateWithoutSalesInputObjectSchema } from './BusinessUpdateWithoutSalesInput.schema';
import { BusinessUncheckedUpdateWithoutSalesInputObjectSchema } from './BusinessUncheckedUpdateWithoutSalesInput.schema';
import { BusinessCreateWithoutSalesInputObjectSchema } from './BusinessCreateWithoutSalesInput.schema';
import { BusinessUncheckedCreateWithoutSalesInputObjectSchema } from './BusinessUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpsertWithoutSalesInput> = z
  .object({
    update: z.union([
      z.lazy(() => BusinessUpdateWithoutSalesInputObjectSchema),
      z.lazy(() => BusinessUncheckedUpdateWithoutSalesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutSalesInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessUpsertWithoutSalesInputObjectSchema = Schema;

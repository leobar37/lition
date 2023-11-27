import { z } from 'zod';
import { BusinessUpdateWithoutProductsInputObjectSchema } from './BusinessUpdateWithoutProductsInput.schema';
import { BusinessUncheckedUpdateWithoutProductsInputObjectSchema } from './BusinessUncheckedUpdateWithoutProductsInput.schema';
import { BusinessCreateWithoutProductsInputObjectSchema } from './BusinessCreateWithoutProductsInput.schema';
import { BusinessUncheckedCreateWithoutProductsInputObjectSchema } from './BusinessUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpsertWithoutProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BusinessUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => BusinessUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BusinessCreateWithoutProductsInputObjectSchema),
      z.lazy(() => BusinessUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const BusinessUpsertWithoutProductsInputObjectSchema = Schema;

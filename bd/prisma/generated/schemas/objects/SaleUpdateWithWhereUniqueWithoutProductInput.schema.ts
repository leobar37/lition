import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutProductInputObjectSchema } from './SaleUpdateWithoutProductInput.schema';
import { SaleUncheckedUpdateWithoutProductInputObjectSchema } from './SaleUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutProductInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SaleUpdateWithoutProductInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpdateWithWhereUniqueWithoutProductInputObjectSchema = Schema;

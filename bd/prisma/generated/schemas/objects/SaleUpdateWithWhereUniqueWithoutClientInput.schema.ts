import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutClientInputObjectSchema } from './SaleUpdateWithoutClientInput.schema';
import { SaleUncheckedUpdateWithoutClientInputObjectSchema } from './SaleUncheckedUpdateWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutClientInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => SaleUpdateWithoutClientInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutClientInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpdateWithWhereUniqueWithoutClientInputObjectSchema = Schema;

import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutBusinessInputObjectSchema } from './SaleUpdateWithoutBusinessInput.schema';
import { SaleUncheckedUpdateWithoutBusinessInputObjectSchema } from './SaleUncheckedUpdateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SaleUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => SaleUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const SaleUpdateWithWhereUniqueWithoutBusinessInputObjectSchema = Schema;

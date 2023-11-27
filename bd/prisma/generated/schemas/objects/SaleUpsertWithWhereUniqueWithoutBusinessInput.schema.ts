import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutBusinessInputObjectSchema } from './SaleUpdateWithoutBusinessInput.schema';
import { SaleUncheckedUpdateWithoutBusinessInputObjectSchema } from './SaleUncheckedUpdateWithoutBusinessInput.schema';
import { SaleCreateWithoutBusinessInputObjectSchema } from './SaleCreateWithoutBusinessInput.schema';
import { SaleUncheckedCreateWithoutBusinessInputObjectSchema } from './SaleUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutBusinessInput> =
  z
    .object({
      where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SaleUpdateWithoutBusinessInputObjectSchema),
        z.lazy(() => SaleUncheckedUpdateWithoutBusinessInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SaleCreateWithoutBusinessInputObjectSchema),
        z.lazy(() => SaleUncheckedCreateWithoutBusinessInputObjectSchema),
      ]),
    })
    .strict();

export const SaleUpsertWithWhereUniqueWithoutBusinessInputObjectSchema = Schema;

import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutClientInputObjectSchema } from './SaleUpdateWithoutClientInput.schema';
import { SaleUncheckedUpdateWithoutClientInputObjectSchema } from './SaleUncheckedUpdateWithoutClientInput.schema';
import { SaleCreateWithoutClientInputObjectSchema } from './SaleCreateWithoutClientInput.schema';
import { SaleUncheckedCreateWithoutClientInputObjectSchema } from './SaleUncheckedCreateWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutClientInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SaleUpdateWithoutClientInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutClientInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SaleCreateWithoutClientInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpsertWithWhereUniqueWithoutClientInputObjectSchema = Schema;

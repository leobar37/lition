import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutProductInputObjectSchema } from './SaleUpdateWithoutProductInput.schema';
import { SaleUncheckedUpdateWithoutProductInputObjectSchema } from './SaleUncheckedUpdateWithoutProductInput.schema';
import { SaleCreateWithoutProductInputObjectSchema } from './SaleCreateWithoutProductInput.schema';
import { SaleUncheckedCreateWithoutProductInputObjectSchema } from './SaleUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutProductInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => SaleUpdateWithoutProductInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutProductInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SaleCreateWithoutProductInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpsertWithWhereUniqueWithoutProductInputObjectSchema = Schema;

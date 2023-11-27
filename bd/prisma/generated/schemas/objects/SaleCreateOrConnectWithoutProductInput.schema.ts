import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutProductInputObjectSchema } from './SaleCreateWithoutProductInput.schema';
import { SaleUncheckedCreateWithoutProductInputObjectSchema } from './SaleUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutProductInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutProductInputObjectSchema = Schema;

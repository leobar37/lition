import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutClientInputObjectSchema } from './SaleCreateWithoutClientInput.schema';
import { SaleUncheckedCreateWithoutClientInputObjectSchema } from './SaleUncheckedCreateWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutClientInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutClientInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutClientInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutClientInputObjectSchema = Schema;

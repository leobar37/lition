import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutBusinessInputObjectSchema } from './SaleCreateWithoutBusinessInput.schema';
import { SaleUncheckedCreateWithoutBusinessInputObjectSchema } from './SaleUncheckedCreateWithoutBusinessInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutBusinessInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutBusinessInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutBusinessInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutBusinessInputObjectSchema = Schema;

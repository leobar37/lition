import { z } from 'zod';
import { SaleUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutClientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ClientUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    lastName: z.string(),
    dni: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string(),
    direction: z.string().optional().nullable(),
    direction_reference: z.string().optional().nullable(),
    note: z.string().optional().nullable(),
    businessId: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
    Sale: z
      .lazy(() => SaleUncheckedCreateNestedManyWithoutClientInputObjectSchema)
      .optional(),
  })
  .strict();

export const ClientUncheckedCreateInputObjectSchema = Schema;

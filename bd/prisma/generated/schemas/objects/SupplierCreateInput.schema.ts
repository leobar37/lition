import { z } from 'zod';
import { BusinessCreateNestedOneWithoutSuppliersInputObjectSchema } from './BusinessCreateNestedOneWithoutSuppliersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateInput> = z
  .object({
    name: z.string(),
    lastName: z.string(),
    dni: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string(),
    direction: z.string().optional().nullable(),
    direction_reference: z.string().optional().nullable(),
    note: z.string().optional().nullable(),
    business: z.lazy(
      () => BusinessCreateNestedOneWithoutSuppliersInputObjectSchema,
    ),
  })
  .strict();

export const SupplierCreateInputObjectSchema = Schema;

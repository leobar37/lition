import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BusinessOrderByWithRelationInputObjectSchema } from './BusinessOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    username: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    roles: z.lazy(() => SortOrderSchema).optional(),
    businessId: z.lazy(() => SortOrderSchema).optional(),
    business: z
      .lazy(() => BusinessOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;

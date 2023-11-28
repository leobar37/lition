import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
import { ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema';
import { BusinessOrderByWithRelationInputObjectSchema } from './BusinessOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    clientId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    businessId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
    client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional(),
    business: z
      .lazy(() => BusinessOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleOrderByWithRelationInputObjectSchema = Schema;

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { ClientOrderByRelationAggregateInputObjectSchema } from './ClientOrderByRelationAggregateInput.schema';
import { SupplierOrderByRelationAggregateInputObjectSchema } from './SupplierOrderByRelationAggregateInput.schema';
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    users: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    clients: z
      .lazy(() => ClientOrderByRelationAggregateInputObjectSchema)
      .optional(),
    suppliers: z
      .lazy(() => SupplierOrderByRelationAggregateInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sales: z
      .lazy(() => SaleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BusinessOrderByWithRelationInputObjectSchema = Schema;

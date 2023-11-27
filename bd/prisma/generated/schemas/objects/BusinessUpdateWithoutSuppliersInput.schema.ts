import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutBusinessNestedInputObjectSchema } from './UserUpdateManyWithoutBusinessNestedInput.schema';
import { ClientUpdateManyWithoutBusinessNestedInputObjectSchema } from './ClientUpdateManyWithoutBusinessNestedInput.schema';
import { ProductUpdateManyWithoutBusinessNestedInputObjectSchema } from './ProductUpdateManyWithoutBusinessNestedInput.schema';
import { SaleUpdateManyWithoutBusinessNestedInputObjectSchema } from './SaleUpdateManyWithoutBusinessNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUpdateWithoutSuppliersInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    code: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    users: z
      .lazy(() => UserUpdateManyWithoutBusinessNestedInputObjectSchema)
      .optional(),
    clients: z
      .lazy(() => ClientUpdateManyWithoutBusinessNestedInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => ProductUpdateManyWithoutBusinessNestedInputObjectSchema)
      .optional(),
    sales: z
      .lazy(() => SaleUpdateManyWithoutBusinessNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BusinessUpdateWithoutSuppliersInputObjectSchema = Schema;

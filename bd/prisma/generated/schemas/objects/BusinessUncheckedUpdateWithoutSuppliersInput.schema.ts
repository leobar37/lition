import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutBusinessNestedInput.schema';
import { ClientUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema } from './ClientUncheckedUpdateManyWithoutBusinessNestedInput.schema';
import { ProductUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutBusinessNestedInput.schema';
import { SaleUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema } from './SaleUncheckedUpdateManyWithoutBusinessNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutSuppliersInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
      .lazy(() => UserUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema)
      .optional(),
    clients: z
      .lazy(
        () => ClientUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema,
      )
      .optional(),
    products: z
      .lazy(
        () => ProductUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema,
      )
      .optional(),
    sales: z
      .lazy(() => SaleUncheckedUpdateManyWithoutBusinessNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BusinessUncheckedUpdateWithoutSuppliersInputObjectSchema = Schema;
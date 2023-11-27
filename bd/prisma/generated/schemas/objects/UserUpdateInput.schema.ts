import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdaterolesInputObjectSchema } from './UserUpdaterolesInput.schema';
import { BusinessUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './BusinessUpdateOneRequiredWithoutUsersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    username: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lastName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    roles: z
      .union([
        z.lazy(() => UserUpdaterolesInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    business: z
      .lazy(() => BusinessUpdateOneRequiredWithoutUsersNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateInputObjectSchema = Schema;

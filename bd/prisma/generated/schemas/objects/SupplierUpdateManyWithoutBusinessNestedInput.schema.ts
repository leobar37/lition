import { z } from 'zod';
import { SupplierCreateWithoutBusinessInputObjectSchema } from './SupplierCreateWithoutBusinessInput.schema';
import { SupplierUncheckedCreateWithoutBusinessInputObjectSchema } from './SupplierUncheckedCreateWithoutBusinessInput.schema';
import { SupplierCreateOrConnectWithoutBusinessInputObjectSchema } from './SupplierCreateOrConnectWithoutBusinessInput.schema';
import { SupplierUpsertWithWhereUniqueWithoutBusinessInputObjectSchema } from './SupplierUpsertWithWhereUniqueWithoutBusinessInput.schema';
import { SupplierCreateManyBusinessInputEnvelopeObjectSchema } from './SupplierCreateManyBusinessInputEnvelope.schema';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateWithWhereUniqueWithoutBusinessInputObjectSchema } from './SupplierUpdateWithWhereUniqueWithoutBusinessInput.schema';
import { SupplierUpdateManyWithWhereWithoutBusinessInputObjectSchema } from './SupplierUpdateManyWithWhereWithoutBusinessInput.schema';
import { SupplierScalarWhereInputObjectSchema } from './SupplierScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpdateManyWithoutBusinessNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SupplierCreateWithoutBusinessInputObjectSchema),
        z.lazy(() => SupplierCreateWithoutBusinessInputObjectSchema).array(),
        z.lazy(() => SupplierUncheckedCreateWithoutBusinessInputObjectSchema),
        z
          .lazy(() => SupplierUncheckedCreateWithoutBusinessInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SupplierCreateOrConnectWithoutBusinessInputObjectSchema),
        z
          .lazy(() => SupplierCreateOrConnectWithoutBusinessInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => SupplierUpsertWithWhereUniqueWithoutBusinessInputObjectSchema,
        ),
        z
          .lazy(
            () => SupplierUpsertWithWhereUniqueWithoutBusinessInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SupplierCreateManyBusinessInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => SupplierWhereUniqueInputObjectSchema),
        z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => SupplierWhereUniqueInputObjectSchema),
        z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => SupplierWhereUniqueInputObjectSchema),
        z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => SupplierWhereUniqueInputObjectSchema),
        z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => SupplierUpdateWithWhereUniqueWithoutBusinessInputObjectSchema,
        ),
        z
          .lazy(
            () => SupplierUpdateWithWhereUniqueWithoutBusinessInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => SupplierUpdateManyWithWhereWithoutBusinessInputObjectSchema,
        ),
        z
          .lazy(
            () => SupplierUpdateManyWithWhereWithoutBusinessInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => SupplierScalarWhereInputObjectSchema),
        z.lazy(() => SupplierScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const SupplierUpdateManyWithoutBusinessNestedInputObjectSchema = Schema;

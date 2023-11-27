import { z } from 'zod';
import { UnitWhereUniqueInputObjectSchema } from './objects/UnitWhereUniqueInput.schema';
import { UnitCreateInputObjectSchema } from './objects/UnitCreateInput.schema';
import { UnitUncheckedCreateInputObjectSchema } from './objects/UnitUncheckedCreateInput.schema';
import { UnitUpdateInputObjectSchema } from './objects/UnitUpdateInput.schema';
import { UnitUncheckedUpdateInputObjectSchema } from './objects/UnitUncheckedUpdateInput.schema';

export const UnitUpsertSchema = z.object({
  where: UnitWhereUniqueInputObjectSchema,
  create: z.union([
    UnitCreateInputObjectSchema,
    UnitUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    UnitUpdateInputObjectSchema,
    UnitUncheckedUpdateInputObjectSchema,
  ]),
});

import { z } from 'zod';
import { UnitUpdateInputObjectSchema } from './objects/UnitUpdateInput.schema';
import { UnitUncheckedUpdateInputObjectSchema } from './objects/UnitUncheckedUpdateInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './objects/UnitWhereUniqueInput.schema';

export const UnitUpdateOneSchema = z.object({
  data: z.union([
    UnitUpdateInputObjectSchema,
    UnitUncheckedUpdateInputObjectSchema,
  ]),
  where: UnitWhereUniqueInputObjectSchema,
});

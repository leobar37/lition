import { z } from 'zod';
import { UnitUpdateManyMutationInputObjectSchema } from './objects/UnitUpdateManyMutationInput.schema';
import { UnitWhereInputObjectSchema } from './objects/UnitWhereInput.schema';

export const UnitUpdateManySchema = z.object({
  data: UnitUpdateManyMutationInputObjectSchema,
  where: UnitWhereInputObjectSchema.optional(),
});

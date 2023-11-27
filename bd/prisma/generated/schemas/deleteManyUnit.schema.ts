import { z } from 'zod';
import { UnitWhereInputObjectSchema } from './objects/UnitWhereInput.schema';

export const UnitDeleteManySchema = z.object({
  where: UnitWhereInputObjectSchema.optional(),
});

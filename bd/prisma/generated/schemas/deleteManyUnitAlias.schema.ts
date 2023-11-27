import { z } from 'zod';
import { UnitAliasWhereInputObjectSchema } from './objects/UnitAliasWhereInput.schema';

export const UnitAliasDeleteManySchema = z.object({
  where: UnitAliasWhereInputObjectSchema.optional(),
});

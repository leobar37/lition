import { z } from 'zod';
import { UnitAliasUpdateManyMutationInputObjectSchema } from './objects/UnitAliasUpdateManyMutationInput.schema';
import { UnitAliasWhereInputObjectSchema } from './objects/UnitAliasWhereInput.schema';

export const UnitAliasUpdateManySchema = z.object({
  data: UnitAliasUpdateManyMutationInputObjectSchema,
  where: UnitAliasWhereInputObjectSchema.optional(),
});

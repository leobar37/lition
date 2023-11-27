import { z } from 'zod';
import { UnitAliasWhereUniqueInputObjectSchema } from './objects/UnitAliasWhereUniqueInput.schema';

export const UnitAliasDeleteOneSchema = z.object({
  where: UnitAliasWhereUniqueInputObjectSchema,
});

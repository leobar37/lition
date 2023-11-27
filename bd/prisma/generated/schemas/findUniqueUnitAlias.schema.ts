import { z } from 'zod';
import { UnitAliasWhereUniqueInputObjectSchema } from './objects/UnitAliasWhereUniqueInput.schema';

export const UnitAliasFindUniqueSchema = z.object({
  where: UnitAliasWhereUniqueInputObjectSchema,
});

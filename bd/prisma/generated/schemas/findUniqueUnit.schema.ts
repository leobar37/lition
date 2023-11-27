import { z } from 'zod';
import { UnitWhereUniqueInputObjectSchema } from './objects/UnitWhereUniqueInput.schema';

export const UnitFindUniqueSchema = z.object({
  where: UnitWhereUniqueInputObjectSchema,
});

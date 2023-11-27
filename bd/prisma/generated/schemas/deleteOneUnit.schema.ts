import { z } from 'zod';
import { UnitWhereUniqueInputObjectSchema } from './objects/UnitWhereUniqueInput.schema';

export const UnitDeleteOneSchema = z.object({
  where: UnitWhereUniqueInputObjectSchema,
});

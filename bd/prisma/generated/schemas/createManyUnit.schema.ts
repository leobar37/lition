import { z } from 'zod';
import { UnitCreateManyInputObjectSchema } from './objects/UnitCreateManyInput.schema';

export const UnitCreateManySchema = z.object({
  data: z.union([
    UnitCreateManyInputObjectSchema,
    z.array(UnitCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

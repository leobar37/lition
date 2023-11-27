import { z } from 'zod';
import { UnitAliasCreateManyInputObjectSchema } from './objects/UnitAliasCreateManyInput.schema';

export const UnitAliasCreateManySchema = z.object({
  data: z.union([
    UnitAliasCreateManyInputObjectSchema,
    z.array(UnitAliasCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

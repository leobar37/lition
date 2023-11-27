import { z } from 'zod';
import { UnitAliasCreateInputObjectSchema } from './objects/UnitAliasCreateInput.schema';
import { UnitAliasUncheckedCreateInputObjectSchema } from './objects/UnitAliasUncheckedCreateInput.schema';

export const UnitAliasCreateOneSchema = z.object({
  data: z.union([
    UnitAliasCreateInputObjectSchema,
    UnitAliasUncheckedCreateInputObjectSchema,
  ]),
});

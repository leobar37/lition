import { z } from 'zod';
import { UnitCreateInputObjectSchema } from './objects/UnitCreateInput.schema';
import { UnitUncheckedCreateInputObjectSchema } from './objects/UnitUncheckedCreateInput.schema';

export const UnitCreateOneSchema = z.object({
  data: z.union([
    UnitCreateInputObjectSchema,
    UnitUncheckedCreateInputObjectSchema,
  ]),
});

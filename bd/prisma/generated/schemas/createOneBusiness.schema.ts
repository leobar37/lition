import { z } from 'zod';
import { BusinessCreateInputObjectSchema } from './objects/BusinessCreateInput.schema';
import { BusinessUncheckedCreateInputObjectSchema } from './objects/BusinessUncheckedCreateInput.schema';

export const BusinessCreateOneSchema = z.object({
  data: z.union([
    BusinessCreateInputObjectSchema,
    BusinessUncheckedCreateInputObjectSchema,
  ]),
});

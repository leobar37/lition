import { z } from 'zod';
import { BusinessUpdateInputObjectSchema } from './objects/BusinessUpdateInput.schema';
import { BusinessUncheckedUpdateInputObjectSchema } from './objects/BusinessUncheckedUpdateInput.schema';
import { BusinessWhereUniqueInputObjectSchema } from './objects/BusinessWhereUniqueInput.schema';

export const BusinessUpdateOneSchema = z.object({
  data: z.union([
    BusinessUpdateInputObjectSchema,
    BusinessUncheckedUpdateInputObjectSchema,
  ]),
  where: BusinessWhereUniqueInputObjectSchema,
});

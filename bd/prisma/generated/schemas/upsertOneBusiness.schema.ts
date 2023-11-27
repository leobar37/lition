import { z } from 'zod';
import { BusinessWhereUniqueInputObjectSchema } from './objects/BusinessWhereUniqueInput.schema';
import { BusinessCreateInputObjectSchema } from './objects/BusinessCreateInput.schema';
import { BusinessUncheckedCreateInputObjectSchema } from './objects/BusinessUncheckedCreateInput.schema';
import { BusinessUpdateInputObjectSchema } from './objects/BusinessUpdateInput.schema';
import { BusinessUncheckedUpdateInputObjectSchema } from './objects/BusinessUncheckedUpdateInput.schema';

export const BusinessUpsertSchema = z.object({
  where: BusinessWhereUniqueInputObjectSchema,
  create: z.union([
    BusinessCreateInputObjectSchema,
    BusinessUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BusinessUpdateInputObjectSchema,
    BusinessUncheckedUpdateInputObjectSchema,
  ]),
});

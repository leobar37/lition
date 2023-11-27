import { z } from 'zod';
import { TransactionCreateInputObjectSchema } from './objects/TransactionCreateInput.schema';
import { TransactionUncheckedCreateInputObjectSchema } from './objects/TransactionUncheckedCreateInput.schema';

export const TransactionCreateOneSchema = z.object({
  data: z.union([
    TransactionCreateInputObjectSchema,
    TransactionUncheckedCreateInputObjectSchema,
  ]),
});

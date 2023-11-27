import { z } from 'zod';
import { TransactionUpdateInputObjectSchema } from './objects/TransactionUpdateInput.schema';
import { TransactionUncheckedUpdateInputObjectSchema } from './objects/TransactionUncheckedUpdateInput.schema';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';

export const TransactionUpdateOneSchema = z.object({
  data: z.union([
    TransactionUpdateInputObjectSchema,
    TransactionUncheckedUpdateInputObjectSchema,
  ]),
  where: TransactionWhereUniqueInputObjectSchema,
});

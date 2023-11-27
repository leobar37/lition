import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';

export const TransactionDeleteOneSchema = z.object({
  where: TransactionWhereUniqueInputObjectSchema,
});

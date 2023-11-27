import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';

export const TransactionFindUniqueSchema = z.object({
  where: TransactionWhereUniqueInputObjectSchema,
});

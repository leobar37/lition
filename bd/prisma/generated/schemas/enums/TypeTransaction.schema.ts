import { z } from 'zod';

export const TypeTransactionSchema = z.enum(['IN', 'OUT']);

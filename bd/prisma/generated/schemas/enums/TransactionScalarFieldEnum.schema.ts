import { z } from 'zod';

export const TransactionScalarFieldEnumSchema = z.enum([
  'id',
  'total',
  'paid',
  'type',
]);

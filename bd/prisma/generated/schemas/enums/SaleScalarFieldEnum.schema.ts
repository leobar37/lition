import { z } from 'zod';

export const SaleScalarFieldEnumSchema = z.enum([
  'id',
  'price',
  'amount',
  'productId',
  'clientId',
  'businessId',
  'createdAt',
]);

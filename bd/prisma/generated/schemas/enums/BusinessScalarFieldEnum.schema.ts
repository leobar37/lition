import { z } from 'zod';

export const BusinessScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'code',
  'createdAt',
]);

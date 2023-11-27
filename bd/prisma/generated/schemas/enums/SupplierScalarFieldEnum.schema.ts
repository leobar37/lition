import { z } from 'zod';

export const SupplierScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'lastName',
  'dni',
  'email',
  'phone',
  'direction',
  'direction_reference',
  'note',
  'businessId',
]);

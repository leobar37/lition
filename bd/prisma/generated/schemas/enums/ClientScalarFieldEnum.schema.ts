import { z } from 'zod';

export const ClientScalarFieldEnumSchema = z.enum([
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
  'createdAt',
  'deletedAt',
]);

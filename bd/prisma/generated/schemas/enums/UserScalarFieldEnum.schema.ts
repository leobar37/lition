import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'username',
  'name',
  'lastName',
  'password',
  'roles',
  'businessId',
  'createdAt',
]);

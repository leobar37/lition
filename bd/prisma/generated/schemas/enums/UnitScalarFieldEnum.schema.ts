import { z } from 'zod';

export const UnitScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'allow_decimal',
]);

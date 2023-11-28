import { z } from 'zod';

export const UnitScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'symbol',
  'allow_decimal',
]);

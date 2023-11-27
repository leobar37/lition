import { z } from 'zod';

export const UnitAliasScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'unitId',
  'productId',
]);

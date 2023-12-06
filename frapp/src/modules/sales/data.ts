import { atom } from "jotai";

export const saleItemAtom = atom<LineSale | null>(null);

import { z } from "zod";

export const lineSaleSchema = z.object({
  productId: z.number(),
  amount: z.number(),
  price: z.number(),
});

export type LineSale = z.infer<typeof lineSaleSchema> & {
  total?: number;
  productName?: string;
  aliasId?: number;
  id?: number;
};

export const linesSaleAtoms = atom<LineSale[]>([]);

import { atom } from "jotai";

export const saleItemAtom = atom<LineSale | null>(null);

import { z } from "zod";

export const lineSaleSchema = z.object({
  productId: z.number(),
  amount: z.number(),
  price: z.number(),
  note: z.string().optional(),
});

export type LineSale = z.infer<typeof lineSaleSchema> & {
  total?: number;
  productName?: string;
  aliasId?: number;
  id?: number;
  symbol?: string;
};

export const linesSaleAtoms = atom<LineSale[]>([]);

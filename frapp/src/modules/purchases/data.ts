import { PaymentState, createPurchaseSchema } from "@lition/common";
import { atom } from "jotai";
import { omit } from "radash";

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

export const frCreatePurchaseSchema = createPurchaseSchema
  .omit({
    paymentSource: true,
    total: true,
    usedAlias: true,
    lines: true,
  })
  .and(
    z.object({
      toAccount: z.number().optional().nullable(),
      paymentState: z.nativeEnum(PaymentState),
    })
  )
  .refine((data) => {
    return data.paymentState === PaymentState.PAY_PARTIAL
      ? (data?.toAccount ?? 0) > 0
      : true;
  })
  .transform((data) => {
    return data.paymentState !== PaymentState.PAY_PARTIAL
      ? omit(data, ["toAccount"])
      : data;
  });

export type CreatePurchaseForm = z.infer<typeof frCreatePurchaseSchema>;

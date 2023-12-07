import { z } from "zod";
import { PaymentState } from "./sale";

export const linePurchaseSchema = z.object({
  price: z.number().positive(),
  amount: z.number().positive(),
  total: z.number().positive(),
  productId: z.number(),
  aliasId: z.number().optional().nullable(),
});

export const createPurchaseSchema = z.object({
  total: z.number().positive(),
  supplierId: z.number(),
  paymentState: z.nativeEnum(PaymentState),
  paymentSource: z
    .object({
      toAccount: z.number(),
    })
    .optional(),
  lines: z.array(linePurchaseSchema),
});

export const updatePurchaseSchema = z.object({
  isCancelled: z.boolean().optional(),
});

export type CreatePurchaseInput = z.TypeOf<typeof createPurchaseSchema>;
export type UpdatePurchaseInput = z.TypeOf<typeof updatePurchaseSchema>;

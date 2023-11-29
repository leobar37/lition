import { jsonSchema } from "../shared-schemas";
import { z } from "zod";

export enum PaymentState {
  PAY_ENTIRE = "PAY_ENTIRE",
  PAY_PARTIAL = "PAY_PARTIAL",
  DEBT = "DEBT",
}

export const createSaleSchema = z.object({
  price: z.number().positive(),
  amount: z.number().positive(),
  usedAlias: jsonSchema,
  total: z.number().positive(),
  isDispatched: z.boolean(),
  productId: z.number(),
  clientId: z.number(),
  paymentState: z.nativeEnum(PaymentState),
  paymentSource: z
    .object({
      toAccount: z.number(),
    })
    .optional(),
});

export type CreateSaleInput = z.TypeOf<typeof createSaleSchema>;

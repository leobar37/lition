import { z } from "zod";

export enum PaymentState {
  PAY_ENTIRE = "PAY_ENTIRE",
  PAY_PARTIAL = "PAY_PARTIAL",
  DEBT = "DEBT",
}
export const lineSaleSchema = z.object({
  price: z.number().positive(),
  amount: z.number().positive(),
  total: z.number().positive(),
  productId: z.number(),
  aliasId: z.number().optional().nullable(),
  note: z.string().optional(),
});

export const createSaleSchema = z.object({
  total: z.number().positive(),
  isDispatched: z.boolean(),
  clientId: z.number(),
  paymentState: z.nativeEnum(PaymentState),
  paymentSource: z
    .object({
      toAccount: z.number(),
    })
    .optional(),
  lines: z.array(lineSaleSchema),
  note: z.string().optional(),
});

export const updateSaleSchema = createSaleSchema
  .pick({
    isDispatched: true,
  })
  .and(
    z.object({
      isCancelled: z.boolean().optional(),
    })
  );

export type CreateSaleInput = z.TypeOf<typeof createSaleSchema>;
export type UpdateSaleInput = z.TypeOf<typeof updateSaleSchema>;

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
});

export const updateSaleSchema = createSaleSchema
  .omit({
    clientId: true,
    paymentState: true,
    lines: true,
  })
  .and(
    z.object({
      lines: z.array(
        lineSaleSchema.and(
          z.object({
            id: z.number().optional().nullable(),
          })
        )
      ),
    })
  );

export type CreateSaleInput = z.TypeOf<typeof createSaleSchema>;
export type UpdateSaleInput = z.TypeOf<typeof updateSaleSchema>;

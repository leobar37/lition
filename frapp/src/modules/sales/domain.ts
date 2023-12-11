import { PaymentState, createSaleSchema } from "@lition/common";
import { omit } from "radash";
import { z } from "zod";
export type CreateSaleForm = z.infer<typeof frCreateSaleSchema>;

export const frCreateSaleSchema = createSaleSchema
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

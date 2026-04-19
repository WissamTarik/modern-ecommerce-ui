import * as zod from "zod"
import { PaymentShippingAddressSchema } from "./ShippingAddress.schema"

export type ShippingAddressPaymentFormType=zod.infer<typeof  PaymentShippingAddressSchema>


import * as zod from "zod"

export const PaymentShippingAddressSchema=zod.object({
    details:zod.string()
               .min(1,"Details is required")
           .max(50,"Details shouldn't exceed 50 characters"),
    city:zod.string()
             .min(1,"City of shipping address is required")
             .max(20,"City shouldn't exceed to 20 character"),

    postalCode:zod.string()      
                   .min(1,"postal code is required")
                   .max(5,"Postal code shouldn't exceed 5 characters")  ,
     phone:zod.string()
                 .min(1,"Phone number is required")
                 .regex(/^01[1250][0-9]{8}$/, "Please enter a valid Egyptian phone number")       
})
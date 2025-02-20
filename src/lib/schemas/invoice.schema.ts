import { z } from "zod";
import { InvoiceStatusType } from "../types/invoice.type";
import { generateInvoiceNumber } from "@/utils/InvoiceNumberGenerator";

export const InvoiceSchema = z.object({
    name: z.string().min(1, { message: 'Invoice name is required' }),
    number: z.string().min(1, { message: 'Invoice number is required' }).default(generateInvoiceNumber),
    dueDate: z.string().min(1, { message: ' Invoice due date is required' }),
    amount: z.number().min(1, "Amount is required").nonnegative("Amount must be positive"),
    status: z.custom<InvoiceStatusType>().refine((val) => !!val, { message: "Status is required", })
})
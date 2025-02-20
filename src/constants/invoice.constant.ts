import { OptionType } from "@/lib/types/common.type";
import { InvoiceType } from "@/lib/types/invoice.type";
import { v4 as uuid } from 'uuid';

export const InvoiceStatusConstant: OptionType[] = [
  { label: "Paid", value: "Paid" },
  { label: "Pending", value: "Pending" },
  { label: "Unpaid", value: "Unpaid" },
];

export const invoiceTableColumns = [
  { id: 'Number', label: 'Invoice' },
  { id: 'Due Date', label: 'Due Date' },
  { id: 'Status', label: 'Status' },
  { id: 'Amount', label: 'Amount' },
  { id: 'Actions', label: 'Actions' },
]

export const dummyInvoiceData: InvoiceType []= [
  {
    id: uuid(),
    name: "Internet Subscription",
    number: "INV202501",
    dueDate: "2025-01-13",
    status: "Paid",
    amount: 582901,
  },
  {
    id: uuid(),
    name: "Electricity Bill",
    number: "INV202502",
    dueDate: "2025-02-04",
    status: "Paid",
    amount: 311909,
  },
  {
    id: uuid(),
    name: "Gym Membership",
    number: "INV202503",
    dueDate: "2025-02-23",
    status: "Unpaid",
    amount: 425000,
  },
  {
    id: uuid(),
    name: "Phone Bill",
    number: "INV202504",
    dueDate: "2025-02-23",
    status: "Pending",
    amount: 148891,
  },
];
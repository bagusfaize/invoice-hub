export type InvoiceType = {
    id: string,
    name: string,
    number: string,
    dueDate: string,
    amount: number,
    status: InvoiceStatusType,
}

export type InvoiceStatusType = "Paid" | "Pending" | "Unpaid";
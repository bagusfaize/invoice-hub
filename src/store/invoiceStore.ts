import { InvoiceType } from "@/lib/types/invoice.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface InvoiceStore {
    invoices: InvoiceType[];
    addInvoice: (invoice: InvoiceType) => void;
    deleteInvoice: (id: string) => void;
}

export const useInvoiceStore = create<InvoiceStore>()(
    persist(
        (set) => ({
            invoices: [],

            // Add new invoice
            addInvoice: (invoice) =>
                set((state) => ({
                    invoices: [...state.invoices, invoice],
                })),

            // Delete invoice
            deleteInvoice: (id) =>
                set((state) => ({
                    invoices: state.invoices.filter((invoice) => invoice.id !== id),
                })),
        }),
        {
            name: "invoice-storage",
        }
    )
);
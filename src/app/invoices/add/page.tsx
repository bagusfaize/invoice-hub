'use client'

import { Box, Typography } from "@mui/material";
import InvoiceForm from "@/components/invoices/InvoiceForm";

export default function AddInvoice() {
  return (
    <Box>
        <Typography variant="h2" sx={{marginBottom: 3, fontSize: 22, fontWeight: 700}}>Add Invoice</Typography>
        <InvoiceForm />
    </Box>
  )
}

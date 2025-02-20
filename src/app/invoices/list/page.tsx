'use client'

import InvoiceTable from "@/components/invoices/InvoiceTable";
import InvoiceToolbar from "@/components/invoices/InvoiceToolbar";
import { Box, Typography } from "@mui/material";

export default function MyInvoices() {
  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent:'space-between'}}>
        <Typography variant="h2" sx={{marginBottom: 3, fontSize: 22, fontWeight: 700}}>My Invoices</Typography>
        <InvoiceToolbar />
      </Box>
        <InvoiceTable />
    </Box>
  )
}

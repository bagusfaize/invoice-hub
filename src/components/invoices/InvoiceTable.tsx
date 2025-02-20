import { invoiceTableColumns } from "@/constants/invoice.constant";
import { useInvoiceStore } from "@/store/invoiceStore";
import { Box, Card, CardContent, CardHeader, Chip, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import dayjs from "dayjs";
import MenuIcon from '@mui/icons-material/Menu';

export default function InvoiceTable() {
    const { invoices } = useInvoiceStore();

    const filteredInvoices = invoices;

    console.log('clg list', invoices);
    return (
        <Card>
            <CardContent sx={{ padding: 4 }}>
                <TableContainer>
                    <Table aria-label="default-table">
                        <TableHead>
                            <TableRow>
                                {invoiceTableColumns.map((column) => (
                                    <TableCell
                                        sx={{
                                            background: '#F7F9FC',
                                            border: 'none',
                                        }}
                                        // className='!bg-[#f7f9fc] border-none'
                                        key={column.id}
                                    // align={"center"}
                                    // style={{ minWidth: column.minWidth }}
                                    >
                                        <Typography fontWeight="600">{column.label}</Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredInvoices.map(invoice => (
                                <TableRow
                                    key={invoice.number}
                                >
                                    <TableCell>
                                        <Box textAlign={"left"}>
                                            <Typography fontWeight="600">{invoice.name}</Typography>
                                            <Typography fontSize={14} color="#64748B">{invoice.number}</Typography>


                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {dayjs(invoice.dueDate).format('MMM DD, YYYY')}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            sx={{
                                                // background
                                            }}
                                            label={ invoice.status }
                                        />

                                    </TableCell>
                                    <TableCell>
                                        {invoice.amount}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <MenuIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

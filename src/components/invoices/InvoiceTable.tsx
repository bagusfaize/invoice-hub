import { invoiceTableColumns } from "@/constants/invoice.constant";
import { useInvoiceStore } from "@/store/invoiceStore";
import { Box, Card, CardContent, Chip, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import dayjs from "dayjs";
import MenuIcon from '@mui/icons-material/Menu';
import { formatCurrency } from "@/utils/currencyFormatter";
import { useSearchParams } from "next/navigation";

export default function InvoiceTable() {
    const { invoices } = useInvoiceStore();
    const searchParams = useSearchParams();

    const search = searchParams.get("search")?.toLowerCase() ?? "";
    const status = searchParams.get("status") ?? "";

    const filteredInvoices = invoices.filter((invoice) => {
        const matchesSearch = invoice.name.toLowerCase().includes(search) || invoice.number.toString().includes(search);
        const matchesStatus = status ? invoice.status === status : true;
        return matchesSearch && matchesStatus;
    });

    const statusStyles = {
        Paid: { bg: "#EDF7F1", text: "#219653" },
        Unpaid: { bg: "#FBF0F1", text: "#D34053" },
        Pending: { bg: "#FFF8EB", text: "#FFA70B" },
    }

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
                                        key={column.id}
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
                                                backgroundColor: statusStyles[invoice.status].bg,
                                                color: statusStyles[invoice.status].text,
                                                fontWeight: 600
                                            }}
                                            label={invoice.status}
                                        />

                                    </TableCell>
                                    <TableCell>
                                        {formatCurrency(invoice.amount)}
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

import { Button, Card, CardContent, CardHeader, Grid2 } from "@mui/material";
import CustomTextField from "../inputs/CustomTextField";
import CustomSelect from "../inputs/CustomSelect";
import CustomDatePicker from "../inputs/CustomDatePicker";
import CustomNumericInput from "../inputs/CustomNumericInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InvoiceSchema } from "@/lib/schemas/invoice.schema";
import { generateInvoiceNumber } from "@/utils/InvoiceNumberGenerator";
import { InvoiceStatusConstant } from "@/constants/invoice.constant";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useInvoiceStore } from "@/store/invoiceStore";
import { InvoiceType } from "@/lib/types/invoice.type";
import { v4 as uuid } from 'uuid';

export default function InvoiceForm() {
    const { addInvoice } = useInvoiceStore();

    const {
        control,
        handleSubmit,
        reset,
    } = useForm({
        resolver: zodResolver(InvoiceSchema),
        defaultValues: {
            number: generateInvoiceNumber(),
        },
    });

    const onSubmit = (data: Omit<InvoiceType, "id">) => {
        const newInvoice = {
            id: uuid(),
            ...data
        }
        addInvoice(newInvoice)
        reset()
    } 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <CardHeader
                    sx={{
                        paddingX: 5,
                        borderBottom: '1px solid lightgray',
                        '& .MuiCardHeader-title': {
                            fontSize: 16,
                            fontWeight: 600
                        }
                    }}
                    title="Invoice Form"
                />
                <CardContent sx={{ paddingX: 5 }}>
                    <Grid2 container spacing={3}>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <CustomTextField
                                name="name"
                                control={control}
                                label="Name"
                                required
                                placeholder="Enter your invoice name"
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <CustomTextField
                                name="number"
                                control={control}
                                label="Number"
                                required
                                readOnly
                                placeholder="Enter your invoice number"
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <CustomDatePicker
                                name="dueDate"
                                control={control}
                                label="Due Date"
                                required
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <CustomNumericInput
                                name="amount"
                                control={control}
                                label="Amount"
                                required
                                placeholder="Enter your invoice amount"
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <CustomSelect
                                name="status"
                                control={control}
                                options={InvoiceStatusConstant}
                                label="Status"
                                required
                                placeholder="Choose the status"
                            />
                        </Grid2>
                    </Grid2>
                    <Grid2 container marginY={2} spacing={2} justifyContent={"end"}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ textTransform: 'uppercase', width: '250px', background: '#3C50E0' }}
                            startIcon={<AddOutlinedIcon/>}
                        >
                            Add Invoice
                        </Button>
                    </Grid2>
                </CardContent>
            </Card>
        </form>
    )
}

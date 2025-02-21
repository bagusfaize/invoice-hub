import { Box, FormGroup, InputLabel, TextField, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";

interface NumericInputProps {
    name: string,
    control: Control<any>,
    label: string,
    required?: boolean,
    placeholder?: string;
}

export default function CustomNumericInput({
    name,
    control,
    label,
    required = false,
    placeholder,
}: NumericInputProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <FormGroup>
                    <InputLabel
                        required={required}
                        sx={{
                            color: 'black',
                            position: 'relative',
                            marginBottom: 1,
                            transform: 'none',
                            fontSize: 14,
                            fontWeight: 600,
                            textTransform: 'capitalize',
                            '& .MuiFormLabel-asterisk': {
                                color: 'red'
                            }
                        }}
                    >
                        {label}
                    </InputLabel>
                    <NumericFormat
                        customInput={TextField}
                        placeholder={placeholder}
                        thousandSeparator
                        size="small"
                        value={field.value}
                        onValueChange={(values) => field.onChange(values.floatValue)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                padding: 0,
                            },
                            '& .MuiOutlinedInput-input': {
                                paddingLeft: 2
                            },
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <Box
                                        sx={{
                                            height: '100%',
                                            background: '#F0F0F0',
                                            color: '#64748B',
                                            fontSize: 14,
                                            paddingY: 1,
                                            paddingX: 2,
                                        }}
                                    >
                                        Rp
                                    </Box>
                                )
                            }
                        }}

                    />
                    {error &&
                        <Typography color="error" fontSize={13} mt={0.5}>
                            {error.message}
                        </Typography>
                    }
                </FormGroup>
            )}
        />

    )
}

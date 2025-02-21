import { FormGroup, InputLabel, TextField, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface TextFieldProps {
    name: string,
    control: Control<any>,
    label: string,
    required?: boolean,
    fullWidth?: boolean,
    placeholder?: string;
    readOnly?: boolean;
}

export default function CustomTextField({
    name,
    control,
    label,
    required = false,
    fullWidth = true,
    placeholder,
    readOnly,
}: TextFieldProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <FormGroup>
                    <InputLabel
                        required={required}
                        htmlFor={`${label}-input`}
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
                    <TextField
                        {...field}
                        size="small"
                        placeholder={placeholder}
                        fullWidth={fullWidth}
                        error={!!error}
                        disabled={readOnly}
                        id={`${label}-input`}
                        sx={{
                            '& .MuiInputBase-input': {
                                fontSize: 15
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

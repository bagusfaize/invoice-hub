'use client'

import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { OptionType } from "@/lib/types/common.type";

interface CustomSelectProps {
    name: string,
    control: Control<any>,
    label: string,
    required?: boolean,
    errorMessage?: string;
    fullWidth?: boolean,
    placeholder?: string;
    type?: string;
    options: OptionType[];
}

export default function CustomSelect({
    name,
    control,
    label,
    required = false,
    errorMessage,
    fullWidth = true,
    placeholder,
    type = 'text',
    options,
}: CustomSelectProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth>
                    <InputLabel
                        htmlFor="demo-simple-select"
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
                        required
                    >
                        {label}
                    </InputLabel>
                    <Select
                        {...field}
                        id="demo-simple-select"
                        displayEmpty
                        renderValue={(selected) => {
                            if (!selected) {
                                return <Typography sx={{ fontSize: 15, color: "#999" }}>{placeholder}</Typography>;
                            }
                            return options.find((option) => option.value === selected)?.label;
                        }}
                        size="small"
                    >
                        <MenuItem disabled value="">{placeholder}</MenuItem>
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {error &&
                        <Typography color="error" fontSize={13} mt={0.5}>
                            {error.message}
                        </Typography>
                    }
                </FormControl>
            )}
        />
    )
}

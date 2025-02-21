import { FormGroup, InputLabel, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { Controller, Control } from "react-hook-form";

interface DatePickerProps {
  name: string,
  control: Control<any>,
  label: string,
  required?: boolean,
}

export default function CustomDatePicker({
  name,
  control,
  label,
  required = false,
}: DatePickerProps) {
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
          <DatePicker
            {...field}
            value={field.value ? dayjs(field.value) : null}
            onChange={(date: Dayjs | null) => field.onChange(date ? date.format("YYYY-MM-DD") : "")}
            slotProps={{ textField: { size: 'small' } }}
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

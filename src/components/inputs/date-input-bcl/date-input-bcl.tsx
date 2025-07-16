import { FormControl, InputLabel, TextField, TextFieldProps } from '@mui/material'

interface DateInputBCLProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  label: string
  name: string
  value: string
  disabled?: boolean
  onChange: (name: string, value: string) => void
}

/**
 * Componente de data reutilizável com herança de propriedades do MUI,
 * e controle personalizado via lib BCL.
 */
export function DateInputBCL({ label, name, value, disabled = false, onChange, ...rest }: DateInputBCLProps) {
  return (
    <FormControl fullWidth>
      <InputLabel shrink style={{ fontWeight: 'bold' }}>
        {label}
      </InputLabel>

      <TextField
        {...rest}
        name={name}
        type="date"
        size="small"
        value={value}
        disabled={disabled}
        fullWidth
        onChange={(e) => onChange(name, e.target.value)}                
      />
    </FormControl>
  )
}

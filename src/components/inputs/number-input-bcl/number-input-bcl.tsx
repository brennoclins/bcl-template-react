import { FormControl, InputLabel, TextField, TextFieldProps } from '@mui/material'

interface InputNumberBCLProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  /** Rótulo exibido acima do campo numérico */
  label: string

  /** Nome único do campo */
  name: string

  /** Valor atual (número ou string vazia) */
  value: number | ''

  /** Desabilita o campo */
  disabled?: boolean

  /**
   * Callback ao alterar o valor
   * @param name Nome do campo
   * @param value Novo valor numérico ou string vazia
   */
  onChange: (name: string, value: number | '') => void
}

/**
 * Componente de entrada numérica padronizado para formulários controlados,
 * com herança de propriedades do MUI.
 */
export function NumberInputBCL({
  label,
  name,
  value,
  disabled = false,
  onChange,
  ...rest
}: InputNumberBCLProps) {
  return (
    <FormControl fullWidth>
      <InputLabel shrink style={{ fontWeight: 'bold' }}>
        {label}
      </InputLabel>

      <TextField
        {...rest}
        name={name}
        type="number"
        size="small"
        value={value}
        disabled={disabled}
        fullWidth
        onChange={(e) => {
          const newValue = e.target.value === '' ? '' : Number(e.target.value)
          onChange(name, newValue)
        }}
        
      />
    </FormControl>
  )
}

import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material'

/**
 * Props do componente SelectInputBCL.
 * Estende SelectProps do MUI, mas redefine onChange e value para uma API controlada.
 */
interface SelectInputBCLProps extends Omit<SelectProps, 'onChange' | 'value'> {
  /** Rótulo que será exibido acima do Select. */
  label?: string

  /** Nome único do campo (usado na mudança de valor). */
  name: string

  /** Valor atual selecionado. */
  value: string

  /** Opções disponíveis para seleção (value + label). */
  options: { value: string; label: string }[]

  /**
   * Função chamada ao alterar o valor.
   * @param name Nome do campo.
   * @param value Novo valor selecionado.
   */
  onChange: (name: string, value: string) => void
}

/**
 * Componente de Select reutilizável com integração simplificada para formulários controlados.
 * Baseado no MUI Select e adaptado ao padrão BCL.
 */
export function SelectInputBCL({ label, name, value, options, onChange, ...rest }: SelectInputBCLProps) {
  return (
    <FormControl fullWidth>
      {/* <InputLabel style={{ fontWeight: 'bold' }}>{label}</InputLabel> */}
      <Select
        {...rest}
        name={name}
        size="small"
        value={value}
        onChange={(e) => onChange(name, e.target.value as string)}
        displayEmpty
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

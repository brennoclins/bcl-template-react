import { TextField, TextFieldProps } from '@mui/material'

/**
 * Props do componente InputTextBCL.
 * Estende as props do TextField do MUI, mas sobrescreve `onChange` para aceitar `(name, value)`.
 */
interface InputTextBCLProps extends Omit<TextFieldProps, 'onChange'> {
  /** Nome único do campo. Será passado como `name` no evento de mudança. */
  name: string

  /**
   * Função chamada ao alterar o valor do campo.
   * @param name Nome do campo que disparou a mudança.
   * @param value Novo valor do campo.
   */
  onChange: (name: string, value: string) => void
}

/**
 * Componente de input de texto reutilizável com integração simplificada para formulários controlados.
 * Baseado no MUI TextField e adaptado ao padrão BCL.
 */
export function InputTextBCL({
  name,
  onChange,
  value = '',
  error = false,
  helperText = '',
  size = 'small',
  fullWidth = true,
  variant = 'outlined',
  ...rest
}: InputTextBCLProps) {
  return (
    <TextField
      {...rest}
      name={name}
      value={value}
      error={error}
      helperText={helperText}
      onChange={(e) => onChange(name, e.target.value)}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
    />
  )
}

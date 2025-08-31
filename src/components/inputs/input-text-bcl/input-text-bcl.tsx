import { TextField, TextFieldProps } from '@mui/material'
import { applyMask, MaskType } from '../../../utils/mascaras/maskUtils'

/**
 * Props do componente InputTextBCL.
 * Estende as props do TextField do MUI, mas sobrescreve `onChange` para aceitar `(name, value)`.
 * Também permite o uso de atributos personalizados `data-*`, que serão aplicados diretamente no input HTML.
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

  // Tipo de máscara para o campo. @default 'none'
  maskType?: MaskType
}

/**
 * Componente de input de texto reutilizável com integração simplificada para formulários controlados.
 * Baseado no MUI TextField e adaptado ao padrão BCL.
 * Suporta atributos `data-*` para facilitar testes e manipulações via DOM.
 * Compatível com a nova API `slotProps.input` do MUI.
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
  maskType = 'none',
  slotProps,
  ...rest
}: InputTextBCLProps) {

  // Máscara de entrada de texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const maskedValue = applyMask(rawValue, maskType)
    onChange(name, maskedValue)
  }

  /**
   * Extrai todos os atributos personalizados `data-*` do restante das props.
   * Esses atributos serão aplicados diretamente no input HTML renderizado pelo MUI.
   */
  const dataAttributes: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(rest as Record<string, unknown>)) {
    if (key.startsWith('data-')) {
      dataAttributes[key] = value
    }
  }

  return (
    <TextField
      {...rest}
      name={name}
      value={value}
      error={error}
      helperText={helperText}
      onChange={handleChange}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          ...dataAttributes
        }
      }}
    />
  )
}

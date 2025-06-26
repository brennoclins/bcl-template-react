import { Checkbox, FormControlLabel } from '@mui/material'

/**
 * Props para o componente CheckboxInputBCL.
 * Recebe informações controladas do estado e dispara eventos com nome e valor.
 */
interface CheckboxProps {
  /** Rótulo exibido ao lado do checkbox. */
  label: string

  /** Nome único do campo, usado na mudança de valor. */
  name: string

  /** Indica se o checkbox está marcado. */
  checked: boolean

  /**
   * Função chamada quando o checkbox muda.
   * @param name Nome do campo.
   * @param checked Novo valor booleano.
   */
  onChange: (name: string, checked: boolean) => void
}

/**
 * Componente reutilizável de checkbox baseado no MUI.
 * Facilita a integração com formulários controlados.
 */
export function CheckboxInputBCL({ label, name, checked, onChange }: CheckboxProps) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          checked={checked}
          onChange={(e) => onChange(name, e.target.checked)}
        />
      }
      label={<span style={{ fontWeight: 'bold' }}>{label}</span>}
    />
  )
}

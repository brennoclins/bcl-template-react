import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

export interface ActionButtonsBCLProps {
  disabledNew?: boolean
  disabledEdit?: boolean
  disabledDelete?: boolean
  onCancel: () => void
  onSave: () => void
  actionType:
    | 'novo'
    | 'editar'
    | 'excluir'
    | 'pagar'
    | 'cancelarPagamento'
    | 'atualizar' 
}

export type ActionConfig = {
  label: string
  bg: (theme: any) => string
  hover: (theme: any) => string
}
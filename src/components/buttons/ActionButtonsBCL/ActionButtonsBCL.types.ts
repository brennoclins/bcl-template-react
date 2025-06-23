import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

export interface ActionButtonConfig {
  key: string
  label: string
  onClick: () => void
  color?: 'primary' | 'success' | 'info' | 'error' | 'warning'
  icon?: ReactNode
  className?: string
  muiProps?: ButtonProps
  hidden?: boolean
  disabled?: boolean
}

export interface ActionButtonsBCLProps {
  actions: ActionButtonConfig[]
  layout?: 'row' | 'column' // direção dos botões
}

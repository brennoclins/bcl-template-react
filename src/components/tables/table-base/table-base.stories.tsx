
import { Meta, StoryObj } from '@storybook/react'

import { TableCell, Chip } from '@mui/material'
import { TableBaseBCL } from './table-base'

type DemoRow = {
  id: number
  nome: string
  status: 'ativo' | 'inativo'
}

const rows: DemoRow[] = [
  { id: 1, nome: 'João', status: 'ativo' },
  { id: 2, nome: 'Maria', status: 'inativo' },
  { id: 3, nome: 'Carlos', status: 'ativo' }
]

const meta: Meta<typeof TableBaseBCL<DemoRow>> = {
  title: 'BCL/Table/TableBaseBCL',
  component: TableBaseBCL,
  args: {
    headers: ['ID', 'Nome', 'Status'],
    rows,
    renderRow: (row) => [
      <TableCell key="id">{row.id}</TableCell>,
      <TableCell key="nome">{row.nome}</TableCell>,
      <TableCell key="status">
        <Chip
          label={row.status.toUpperCase()}
          color={row.status === 'ativo' ? 'success' : 'default'}
          size="small"
        />
      </TableCell>
    ]
  }
}

export default meta
type Story = StoryObj<typeof TableBaseBCL<DemoRow>>

export const CustomRowRendering: Story = {}

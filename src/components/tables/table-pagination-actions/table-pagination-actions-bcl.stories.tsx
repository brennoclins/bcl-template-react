import type { Meta, StoryObj } from '@storybook/react-vite'
import { TablePaginationActionsBCL } from './table-pagination-actions'

const meta: Meta<typeof TablePaginationActionsBCL> = {
  title: 'BCL/Pagination/TablePaginationActionsBCL',
  component: TablePaginationActionsBCL,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de paginação customizado da BCL-ST, usado no `<TablePagination />` para controle de navegação.'
      }
    }
  },
  tags: ['autodocs'],
  args: {
    count: 100,
    rowsPerPage: 10,
    page: 0,
    onPageChange: (event, newPage) => {
      alert(`Navegando para página ${newPage}`)
    }
  },
  argTypes: {
    onPageChange: { action: 'onPageChange' }
  }
}

export default meta
type Story = StoryObj<typeof TablePaginationActionsBCL>

export const Default: Story = {
  render: (args) => <TablePaginationActionsBCL {...args} />
}

export const OnLastPage: Story = {
  args: {
    page: 9
  }
}

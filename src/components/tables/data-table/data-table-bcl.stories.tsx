import { Meta, StoryObj } from '@storybook/react-vite'
import { DataTableBCL } from './data-table'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

type Fornecedor = {
  id: number
  nome: string
  tipo: string
  ativo: boolean
  grupo: {
    nome: string
  }
}

const rows: Fornecedor[] = [
  {
    id: 1,
    nome: 'Fornecedor Alpha',
    tipo: 'Interno',
    ativo: true,
    grupo: { nome: 'Grupo A' }
  },
  {
    id: 2,
    nome: 'Fornecedor Beta',
    tipo: 'Externo',
    ativo: false,
    grupo: { nome: 'Grupo B' }
  }
]

const meta: Meta<typeof DataTableBCL<Fornecedor>> = {
  title: 'BCL/Table/DataTableBCL',
  component: DataTableBCL,
  parameters: {
    docs: {
      description: {
        component: 'Tabela de dados altamente configurável da BCL-ST, com suporte integrado a paginação, ordenação, cabeçalhos dinâmicos e renderização customizada de células.'
      }
    }
  },
  tags: ['autodocs'],
  args: {
    headers: ['ID', 'Nome', 'Tipo', 'Ativo', 'Grupo'],
    tableRow: ['id', 'nome', 'tipo', 'ativo', 'grupo.nome'],
    rows,
    onEdit: (row) => alert(`Editar registro: ${row.nome}`),
    onDelete: (row) => alert(`Excluir registro: ${row.nome}`),
    booleanIcons: {
      trueIcon: <CheckCircleIcon className="w-5 h-5 text-green-600" />,
      falseIcon: <XCircleIcon className="w-5 h-5 text-red-600" />
    }
  }
}


export default meta
type Story = StoryObj<typeof DataTableBCL<Fornecedor>>

export const Default: Story = {}

// export const TailwindVisualTest = () => (
//   <div className="bg-emerald-100 border border-emerald-400 text-emerald-800 p-4 rounded shadow">
//     Tailwind funcionando perfeitamente 💚
//   </div>
// )
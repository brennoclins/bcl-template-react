import type { Meta, StoryObj } from '@storybook/react'
import { LoadingToTables } from './loading-to-tables'

const meta: Meta<typeof LoadingToTables> = {
  title: 'BCL/Feedback/LoadingToTables',
  component: LoadingToTables,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Componente de carregamento visual para exibição de tabelas. Utiliza `LinearProgress` e `Skeletons` para simular cabeçalho e linhas durante o carregamento de dados. Ideal para aplicações que desejam exibir um placeholder animado em páginas de listagens.'
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof LoadingToTables>

export const Default: Story = {
  render: () => <LoadingToTables />
}

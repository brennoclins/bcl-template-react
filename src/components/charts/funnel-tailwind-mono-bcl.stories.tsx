import { Meta, StoryObj } from '@storybook/react-vite'
import { FunnelTailwindMonoBCL } from './funnel-tailwind-mono-bcl'

const meta: Meta<typeof FunnelTailwindMonoBCL> = {
  title: 'BCL/Charts/FunnelTailwindMonoBCL',
  component: FunnelTailwindMonoBCL,
  parameters: {
    docs: {
      description: {
        component:
          'Gráfico de funil com largura fixa e aparência monocromática. Cada etapa é proporcional ao total de labels enviados. Etapas com valor zero aparecem em cinza claro. Estilizado com Tailwind e responsivo via MUI.'
      }
    }
  },
  tags: ['autodocs'],
  args: {
    title: 'Fluxo de Atendimento',
    stages: [
      { label: 'Recebido', value: 1000 },
      { label: 'Processado', value: 700 },
      { label: 'Resolvido', value: 380 },
      { label: 'Reaberto', value: 0 }
    ],
    maxWidth: 90,
    minWidth: 30,
    color: 'bg-indigo-600',
    textColor: 'text-white',
    emptyColor: 'bg-gray-200',
    emptyTextColor: 'text-gray-800'
  }
}

export default meta
type Story = StoryObj<typeof FunnelTailwindMonoBCL>
export const Default: Story = {}

import { Meta, StoryObj } from '@storybook/react-vite'
import { Typography, Box, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useFormattedDateBCL } from './useFormattedDateBCL'

type Props = {
  date: string
}

const VisualizacaoHookDataBCL = ({ date }: Props) => {
  const [selectedDate, setSelectedDate] = useState(date)

  const { inputFormat, readableFormat, isoFormat } = useFormattedDateBCL(selectedDate)

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        🎣 Visualização do <code>useFormattedDateBCL</code>
      </Typography>

      <TextField
        label="Alterar data"
        type="datetime-local"
        value={inputFormat}
        onChange={(e) => setSelectedDate(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Stack spacing={2}>
        <Typography><strong>📥 inputFormat:</strong> {inputFormat}</Typography>
        <Typography><strong>📖 readableFormat:</strong> {readableFormat}</Typography>
        <Typography><strong>📡 isoFormat:</strong> {isoFormat}</Typography>
      </Stack>
    </Box>
  )
}

const meta: Meta<typeof VisualizacaoHookDataBCL> = {
  title: 'BCL/Utils/useFormattedDateBCL',
  component: VisualizacaoHookDataBCL,
  parameters: {
    docs: {
      description: {
        component:
          'Hook do BCL-ST para formatação padronizada de datas, útil em inputs de formulário, exibição legível e envio seguro via API. Baseado no serviço <code>DataBCLService</code>.'
      }
    }
  },
  tags: ['autodocs'],
  args: {
    date: '2025-07-06T15:30:00'
  }
}

export default meta
type Story = StoryObj<typeof VisualizacaoHookDataBCL>
export const Default: Story = {}

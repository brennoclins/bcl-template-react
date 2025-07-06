import { Meta, StoryObj } from '@storybook/react-vite'
import { Typography, Box, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { DataBCLService } from './dataBCLService'

type Props = {
  date: string
}

const VisualizacaoDataBCL = ({ date }: Props) => {
  const [selectedDate, setSelectedDate] = useState(date)

  const inputFormat = DataBCLService.formatForInput(selectedDate)
  const readableFormat = DataBCLService.formatReadable(selectedDate)
  const isPast = DataBCLService.isPastDate(selectedDate)
  const label = DataBCLService.getDateLabel(selectedDate)
  const diffDays = DataBCLService.diffInDays(selectedDate)
  const timeUntil = DataBCLService.timeUntil(selectedDate)
  const convertedToISO = DataBCLService.convertInputToISO(inputFormat)

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        📅 Visualização do <code>DataBCLService</code>
      </Typography>

      <TextField
        type="datetime-local"
        label="Alterar data"
        value={inputFormat}
        onChange={(e) => setSelectedDate(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Stack spacing={2}>
        <Typography><strong>📖 formatReadable:</strong> {readableFormat}</Typography>
        <Typography><strong>🕓 convertInputToISO:</strong> {convertedToISO}</Typography>
        <Typography><strong>⏳ isPastDate:</strong> {isPast ? '✅ Já passou' : '🕒 Ainda está por vir'}</Typography>
        <Typography><strong>🏷️ getDateLabel:</strong> {label}</Typography>
        <Typography><strong>📆 diffInDays:</strong> {diffDays} dia(s)</Typography>
        <Typography><strong>🗣️ timeUntil:</strong> {timeUntil}</Typography>
      </Stack>
    </Box>
  )
}

// ⬇️ Esse export default é obrigatório para Storybook funcionar
const meta: Meta<typeof VisualizacaoDataBCL> = {
  title: 'BCL/Utils/DataBCLService',
  component: VisualizacaoDataBCL,
  parameters: {
    docs: {
      description: {
        component:
          'Serviço de utilitários de data do BCL para formatação, análise e conversão entre formatos ISO, legíveis e compatíveis com input datetime-local.'
      }
    }
  },
  tags: ['autodocs'],
  args: {
    date: '2025-07-06T15:30:00Z'
  }
}

export default meta
type Story = StoryObj<typeof VisualizacaoDataBCL>
export const Default: Story = {}


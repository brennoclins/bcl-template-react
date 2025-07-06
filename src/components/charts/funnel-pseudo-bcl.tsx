import { Box, Typography } from '@mui/material'

type FunnelStage = {
  label: string
  value: number
}

type FunnelBCLPseudoProps = {
  stages: FunnelStage[]
  maxWidth?: number // % do container, ex: 100
  colorClasses?: string[]
}

export const FunnelPseudoBCL = ({ stages, maxWidth = 100, colorClasses = [] }: FunnelBCLPseudoProps) => {
  const maxValue = Math.max(...stages.map((s) => s.value))

  return (
    <Box className="flex flex-col items-start gap-2 w-full">
      {stages.map((stage, index) => {
        const percent = stage.value / maxValue
        const width = percent * maxWidth
        const colorClass = colorClasses[index] || 'bg-blue-600'

        return (
          <Box key={index} className="flex items-center gap-3 w-full">
            {/* Label à esquerda */}
            <Typography className="text-sm font-medium text-gray-800 min-w-[80px] text-right">{stage.label}</Typography>

            {/* Faixa visual do funil */}
            <Box className={`text-white text-xs py-2 px-3 rounded ${colorClass}`} sx={{ width: `${width}%` }}>
              {stage.value}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

import { FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer } from 'recharts'
import { Box, Grid } from '@mui/material'

export type FunnelStage = {
  label: string
  value: number // quantidade textual
  size: number // determina o tamanho visual da etapa
  fill?: string
}

type FunnelBCLProps = {
  data: FunnelStage[]
  width?: number
  height?: number
  tooltip?: boolean
}

export const FunnelBCL = ({ data, width = 10000, height = 500, tooltip = true }: FunnelBCLProps) => {
  const chartData = data.map((stage, index) => ({
    ...stage,
    fill: stage.fill || defaultColors[index % defaultColors.length]
  }))

  return (
    <Grid sx={{ width: `${width}px`, height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
          {tooltip && <Tooltip />}
          <Funnel dataKey="size" data={chartData} isAnimationActive>
            {/* Label à esquerda, agora visível e com cor preta */}
            {/* <LabelList dataKey="label" position="left" style={{ fill: 'black', fontWeight: 500, marginRight: 16 }} /> */}
            <LabelList
              dataKey="label"
              position="center"
              content={(props) => {
                const { x, y, value } = props
                return (
                  <text x={x - 10} y={y} textAnchor="end" dominantBaseline="middle" fill="#000" fontSize={14} fontWeight={500}>
                    {value}
                  </text>
                )
              }}
            />

            {/* Valor sempre dentro da faixa com texto branco */}
            <LabelList dataKey="value" position="inside" style={{ fill: 'white', fontWeight: 600 }} />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </Grid>
  )
}

const defaultColors = ['#1976d2', '#4caf50', '#ff9800', '#f44336', '#9c27b0']

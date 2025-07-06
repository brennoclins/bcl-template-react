type FunnelStage = {
  label: string
  value: number
}

type FunnelTailwindMonoProps = {
  stages: FunnelStage[]
  title?: string
  maxWidth?: number // Largura máx (topo)
  minWidth?: number // Largura min (base)
  color?: string // Cor padrão (Tailwind class)
  textColor?: string // Cor do texto (Tailwind class)
  emptyColor?: string // Cor para etapas com valor zero
  emptyTextColor?: string
}

export const FunnelTailwindMonoBCL = ({
  stages,
  title = '',
  maxWidth = 100,
  minWidth = 40,
  color = 'bg-indigo-600',
  textColor = 'text-white',
  emptyColor = 'bg-gray-200',
  emptyTextColor = 'text-gray-800'
}: FunnelTailwindMonoProps) => {
  const total = stages.length

  const widthSteps = stages.map((_, index) => {
    if (total === 1) return maxWidth
    const ratio = 1 - index / (total - 1)
    return minWidth + ratio * (maxWidth - minWidth)
  })

  return (
    <section className="flex flex-col items-center gap-2 w-full">
      {title !== '' ? (
        <h2 className="w-full font-semibold uppercase p-2 text-2xl md:text-3xl border-b-2 border-indigo-500">{title}</h2>
      ): (
        <span></span>
      )}
      

      {stages.map((stage, index) => {
        const isEmpty = stage.value === 0
        const bgColor = isEmpty ? emptyColor : color
        const txtColor = isEmpty ? emptyTextColor : textColor
        const width = widthSteps[index]

        return (
          <section key={index} className="w-full grid grid-cols-2 gap-2 px-2 items-center">
            <div>
              <span className="font-medium uppercase text-gray-800">{stage.label}</span>
            </div>

            <div className="relative w-full flex justify-center">
              <div className={`rounded py-2 shadow text-sm ${bgColor} ${txtColor}`} style={{ width: `${width}%` }}>
                <div className="flex items-center justify-center px-2">
                  <span className="font-semibold">{stage.value}</span>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </section>
  )
}

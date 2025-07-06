type FunnelStage = {
  label: string
  value: number
}

type FunnelTailwindProps = {
  stages: FunnelStage[]
  title: string
  maxWidth?: number // largura máxima do topo do funil
  colorClasses?: string[]
}

export const FunnelTailwindBCL = ({ stages, maxWidth = 100, title = 'Gráficos BCL', colorClasses = [] }: FunnelTailwindProps) => {
  const maxValue = Math.max(...stages.map((s) => s.value))

  return (
    <section className="flex flex-col items-center gap-2 w-full">
      <h2 className="w-full font-semibold uppercase p-2 text-2xl md:text-3xl border-b-2 border-purple-500">{title}</h2>

      {stages.map((stage, index) => {
        // Define largura base (usada pra normalizar tamanho)
        let baseWidth = maxWidth
        if (index > 0) {
          const prevStage = stages[index - 1]
          baseWidth = prevStage.value === 0 ? maxWidth : (prevStage.value / maxValue) * maxWidth
        }

        // Lógica de cor e tamanho
        const isZero = stage.value === 0
        const percent = isZero ? 0.9 : stage.value / maxValue
        const width = isZero ? baseWidth * 0.9 : percent * maxWidth
        const colorClass = isZero ? 'bg-gray-300 text-black' : colorClasses[index] || 'bg-purple-700 text-white'

        return (
          <section key={index} className="w-full h-full grid grid-cols-2 gap-2 px-2">
            <div>
              <span className="font-medium uppercase">{stage.label}</span>
            </div>

            <div className="relative w-full flex justify-center">
              <div className={`${colorClass} text-sm py-2 rounded shadow transition-all duration-300`} style={{ width: `${width}%` }}>
                <div className="flex items-center justify-center px-2">
                  <span className="text-sm font-semibold">{stage.value}</span>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </section>
  )
}

// export const FunnelTailwindBCL = ({ stages, maxWidth = 100, title = 'Graficos BCL', colorClasses = [] }: FunnelTailwindProps) => {
//   const maxValue = Math.max(...stages.map((s) => s.value))

//   return (
//     <section className="flex flex-col items-center gap-2 w-full">
//       <h2 className="w-full font-semibold uppercase p-2 text-2xl md:text-3xl border-b-2 border-purple-500">{title}</h2>
//       {stages.map((stage, index) => {
//         const percent = stage.value / maxValue
//         const width = percent * maxWidth
//         const colorClass = colorClasses[index] || 'bg-purple-700'

//         return (
//           <section className="w-full h-full grid grid-cols-2 gap-2 px-2">
//             <div>
//               <span className="font-medium uppercase">{stage.label}</span>
//             </div>

//             <div key={index} className="relative w-full flex justify-center">
//               <div
//                 className={`${colorClass} text-white text-sm py-2 rounded shadow transition-all duration-300`}
//                 style={{ width: `${width}%` }}
//               >
//                 <div className="flex items-center justify-center px-2">
//                   <span className="text-sm font-semibold">{stage.value}</span>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )
//       })}
//     </section>
//   )
// }

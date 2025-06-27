import { Box, LinearProgress, Skeleton } from '@mui/material'

/**
 * Componente de loading.
 * Exibe uma linha com um título enquanto os dados são carregados.
 */
export function Loading() {
  return (
    <section className="relative w-screen h-screen flex flex-col items-center overflow-hidden max-w-screen-lg mx-auto">
      <div className="w-full h-full p-2">
        <LinearProgress color="inherit" className="h-1 mb-4" />

        <h1 className="font-semibold text-2xl md:text-4xl text-gray-700 mb-4">Carregando dados...</h1>
      </div>
    </section>
  )
}

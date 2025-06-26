import { Box, LinearProgress, Skeleton } from '@mui/material'

/**
 * Componente de loading para exibição de tabelas.
 * Exibe um título e linhas simuladas com Skeleton enquanto os dados são carregados.
 */
export function LoadingToTables() {
  return (
    <section className="relative w-full h-fit flex flex-col items-center overflow-hidden max-w-screen-lg mx-auto">
      <div className="w-full p-2">
        <LinearProgress color="inherit" className="h-1 mb-4" />

        <h1 className="font-semibold text-2xl md:text-4xl text-gray-700 mb-4">Carregando dados...</h1>

        {/* Cabeçalho falso */}
        <Skeleton variant="text" width="100%" height={36} animation="wave" className="bg-gray-400 mb-2" />

        {/* Linhas */}
        {[...Array(5)].map((_, index) => (
          <Box key={index} display="flex" gap={2} alignItems="center" mb={1}>
            <Skeleton variant="text" width="5%" height={30} className="bg-gray-400" />
            <Skeleton variant="text" width="45%" height={30} className="bg-gray-400" />
            <Skeleton variant="text" width="30%" height={30} className="bg-gray-400" />
            <Skeleton variant="text" width="15%" height={30} className="bg-gray-400" />
          </Box>
        ))}
      </div>
    </section>
  )
}

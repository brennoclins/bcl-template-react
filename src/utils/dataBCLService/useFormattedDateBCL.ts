import { useMemo } from 'react'
import { DataBCLService } from './dataBCLService'

/**
 * Hook utilitário para formatação padronizada de datas no contexto BCL.
 * Ideal para uso com inputs, exibição legível e envio para APIs.
 */
export function useFormattedDateBCL(dateString: string) {
  return useMemo(() => {
    const inputFormat = DataBCLService.formatForInput(dateString)
    const readableFormat = DataBCLService.formatReadable(dateString)
    const isoFormat = DataBCLService.convertInputToISO(inputFormat)

    return {
      inputFormat,      // Ex: "2025-07-03T18:11" (input compatível)
      readableFormat,   // Ex: "03/07/2025 18:11"
      isoFormat         // Ex: "2025-07-03T21:11:00.000Z" (para API)
    }
  }, [dateString])
}

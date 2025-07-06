import { format, parseISO, differenceInDays, isBefore, isAfter } from 'date-fns'

/**
 * Serviço utilitário para manipulação de datas no padrão BCL.
 */
export const DataBCLService = {
  /**
   * Converte ISO para formato aceito por <input type="datetime-local" />
   * Ex: "2025-07-03T21:11:05.890Z" → "2025-07-03T21:11"
   */
  formatForInput(datetime: string): string {
    try {
      const date = parseISO(datetime)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      return `${year}-${month}-${day}T${hours}:${minutes}`
    } catch {
      return ''
    }
  },

  /**
   * Formata ISO para leitura humana
   * Ex: "2025-07-03T21:11:05.890Z" → "03/07/2025 18:11"
   */
  formatReadable(datetime: string): string {
    try {
      const date = parseISO(datetime)
      return format(date, 'dd/MM/yyyy HH:mm')
    } catch {
      return ''
    }
  },

  /**
   * Converte input local (datetime-local) para ISO
   * Ex: "2025-07-03T18:11" → "2025-07-03T21:11:00.000Z"
   */
  convertInputToISO(datetimeLocal: string): string {
    try {
      const date = new Date(datetimeLocal)
      return date.toISOString()
    } catch {
      return ''
    }
  },

   /**
   * Verifica se a data já passou em relação ao agora
   */
  isPastDate(datetime: string): boolean {
    try {
      const date = parseISO(datetime)
      return isBefore(date, new Date())
    } catch {
      return false
    }
  },

  /**
   * Retorna rótulo intuitivo para a data
   * Ex: Hoje, Ontem, Amanhã ou data formatada
   */
  getDateLabel(datetime: string): string {
    try {
      const target = parseISO(datetime)
      const today = new Date()

      const diff = differenceInDays(
        new Date(target.getFullYear(), target.getMonth(), target.getDate()),
        new Date(today.getFullYear(), today.getMonth(), today.getDate())
      )

      if (diff === 0) return 'Hoje'
      if (diff === -1) return 'Ontem'
      if (diff === 1) return 'Amanhã'

      return format(target, 'dd/MM/yyyy')
    } catch {
      return ''
    }
  },

  /**
   * Retorna diferença em dias (positiva ou negativa)
   */
  diffInDays(datetime: string): number {
    try {
      const target = parseISO(datetime)
      const today = new Date()
      return differenceInDays(target, today)
    } catch {
      return 0
    }
  },

  /**
   * Retorna texto tipo "há 3 dias", "em 2 dias"
   */
  timeUntil(datetime: string): string {
    try {
      const days = DataBCLService.diffInDays(datetime)
      if (days === 0) return 'Hoje'
      if (days < 0) return `há ${Math.abs(days)} dia${Math.abs(days) > 1 ? 's' : ''}`
      return `em ${days} dia${days > 1 ? 's' : ''}`
    } catch {
      return ''
    }
  }
}

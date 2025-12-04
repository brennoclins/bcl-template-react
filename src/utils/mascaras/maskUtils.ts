// Tipo de máscara para o componente InputTextBCL.
export type MaskType = 'currency' | 'cpf' | 'cnpj' | 'phone' | 'cep' | 'none'

/**
 * Aplica máscara ao valor de um campo de texto.
 * @param value Valor a ser aplicado a máscara
 * @param type Tipo da máscara
 * @returns Valor com máscara aplicada
 */
export const applyMask = (value: string, type: MaskType): string => {
  const digits = value.replace(/\D/g, '')

  switch (type) {
    case 'currency': {
      // Preservar o sinal de menos se existir
      const isNegative = value.startsWith('-')
      const digitsOnly = value.replace(/\D/g, '')

      // Se não houver dígitos, retornar string vazia ou apenas '-' se o usuário digitou
      if (digitsOnly === '') return isNegative ? '-' : ''

      const number = parseFloat(digitsOnly) / 100
      const formatted = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(number)

      // Retornar com sinal negativo se necessário
      return isNegative ? `-${formatted}` : formatted
    }


    case 'cpf':
      return digits
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1-$2')
        .slice(0, 14)

    case 'cnpj':
      return digits
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .slice(0, 18)

    case 'phone':
      return digits
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .slice(0, 15)

    case 'cep':
      return digits
        .replace(/^(\d{5})(\d)/, '$1-$2')
        .slice(0, 9)

    default:
      return value
  }
}

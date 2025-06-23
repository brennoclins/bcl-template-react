module.exports = {
  types: [
    { value: 'feat', name: '✨ feat:     Nova funcionalidade' },
    { value: 'fix', name: '🐛 fix:      Correção de bug' },
    { value: 'docs', name: '📝 docs:     Apenas mudanças de documentação' },
    { value: 'style', name: '💄 style:    Ajustes de estilo (formatação, etc)' },
    { value: 'refactor', name: '♻️ refactor: Refatoração de código' },
    { value: 'test', name: '✅ test:     Adição ou ajuste de testes' },
    { value: 'chore', name: '🔧 chore:    Tarefa rotineira (build, deps)' }
  ],
  messages: {
    type: 'Selecione o tipo de mudança que você está commitando:',
    scope: 'Escopo desta mudança (opcional):',
    customScope: 'Defina o escopo:',
    subject: 'Escreva uma breve descrição:',
    body: 'Descrição mais longa (opcional). Use "|" para quebra de linha:',
    breaking: 'Há alguma mudança que quebra versões anteriores? (opcional):',
    footer: 'Referência a issues (ex: #123) (opcional):',
    confirmCommit: 'Deseja prosseguir com o commit acima?'
  }
}


#### ✅ BCLButton
- Um botão baseado em MUI, com suporte a estilização via Tailwind.
```tsx
import { BCLButton } from '@brennoclins/bcl-template-react'

<BCLButton
  tailwindClass="bg-blue-600 hover:bg-blue-700 text-white"
  onClick={() => alert('Clicou!')}
>
  Clique aqui
</BCLButton>

```

#### Props:
- Todas as props padrão do <Button /> do MUI
- tailwindClass?: string com classes utilitárias adicionais

# BCL Template React

**Biblioteca de componentes React com suporte a MUI e TailwindCSS**, criada por [@brennoclins](https://github.com/brennoclins).

Este pacote fornece componentes reutilizáveis, consistentes e estilizados para acelerar o desenvolvimento de interfaces modernas — começando por botões essenciais.

---

## 🚀 Instalação

```bash
npm install @brennoclins/bcl-template-react
```
> Certifique-se de ter o MUI e o TailwindCSS configurados no seu projeto.

## 📦 Componentes disponíveis

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


### ✅ ActionButtonsBCL

- Conjunto de botões de ação reutilizável — como Cancelar, Salvar, Excluir — com controle dinâmico via props.

```tsx
<ActionButtonsBCL
  actions={[
    {
      key: 'cancel',
      label: 'Cancelar',
      onClick: handleCancel,
      color: 'primary'
    },
    {
      key: 'save',
      label: actionType === 'excluir' ? 'Excluir' : 'Salvar',
      onClick: handleSave,
      color:
        actionType === 'excluir'
          ? 'error'
          : actionType === 'editar'
          ? 'info'
          : 'success'
    }
  ]}
/>
```

#### Props:
- actions: ActionButtonConfig[] → array de botões com:
  - key: identificador único
  - label: texto do botão
  - onClick: ação do botão
  - color?: "primary" | "success" | "info" | "error" | "warning"
  - disabled?, hidden?, icon?, muiProps?, className?
  - layout?: "row" | "column" → define o layout dos botões



## 📫 Contribuições
Sinta-se à vontade para abrir issues ou PRs!

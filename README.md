# BCL Template React

Biblioteca de componentes React com suporte a **MUI** e **TailwindCSS**, criada por [@brennoclins](https://github.com/brennoclins).  

Este pacote fornece componentes prontos e personalizáveis para acelerar o desenvolvimento de interfaces.

---

## 🚀 Instalação

```bash
npm install @brennoclins/bcl-template-react
```

## 📦 Componentes disponíveis

#### BCLButton
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

#### ActionButonsBCL
- Como usar
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

### Props:
- Todas as props padrão do <Button /> do MUI
- tailwindClass?: string com classes utilitárias adicionais



## 📫 Contribuições
Sinta-se à vontade para abrir issues ou PRs!

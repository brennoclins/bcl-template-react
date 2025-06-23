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



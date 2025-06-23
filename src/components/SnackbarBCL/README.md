# 🔔 SnackbarBCL

Componente provider para exibir alertas flutuantes com mensagens contextuais, baseado no MUI.

## ✅ Uso

Envolva sua aplicação:

```tsx
import { SnackbarBCLProvider } from '@brennoclins/bcl-template-react'

<SnackbarBCLProvider>
  <App />
</SnackbarBCLProvider>
```

Para customizar a posição:
```tsx
<SnackbarBCLProvider position={{ vertical: 'bottom', horizontal: 'left' }}>
  <App />
</SnackbarBCLProvider>
```

E exiba notificações com:
```tsx
import { useSnackbarBCL } from '@brennoclins/bcl-template-react'

const { showSnackbar } = useSnackbarBCL()

showSnackbar('Mensagem salva com sucesso!', 'success')

```
### Cores suportadas
- success
- error
- warning
- info
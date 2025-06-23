# 🧩 SectionTitleBCL

Componente de título de seção com separador visual elegante, ideal para listas ou blocos de conteúdo.

## ✅ Uso

```tsx
import { SectionTitleBCL } from '@brennoclins/bcl-template-react'

<SectionTitleBCL title="Seção destacada" />
```

### 🔧 Props
<table> <thead> <tr> <th>Prop</th> <th>Tipo</th> <th>Default</th> <th>Descrição</th> </tr> </thead> <tbody> <tr> <td><code>title</code></td> <td><code>string</code></td> <td>—</td> <td>Texto exibido no cabeçalho</td> </tr> <tr> <td><code>align</code></td> <td><code>'left' | 'center' | 'right'</code></td> <td><code>'center'</code></td> <td>Define o alinhamento horizontal do título e da linha</td> </tr> </tbody> </table>

Exemplo alinhado à esquerda:
```tsx
<SectionTitleBCL title="Pedidos Recentes" align="left" />

```

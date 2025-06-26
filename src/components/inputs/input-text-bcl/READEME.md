# InputTextBCL

Componente de campo de texto reutilizável baseado no `TextField` do Material UI, com uma API adaptada para uso com formulários controlados e integração facilitada com `Formik`.

## Uso

```tsx
import { InputTextBCL } from '@brennoclins/bcl-template-react'

<InputTextBCL
  name="email"
  label="E-mail"
  value={values.email}
  onChange={(name, value) => setFieldValue(name, value)}
  error={Boolean(errors.email)}
  helperText={errors.email}
/>

```

### 🔧 Props

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td><code>string</code></td>
      <td>Nome do campo. Será atribuído ao <code>name</code> do input.</td>
    </tr>
    <tr>
      <td><code>onChange</code></td>
      <td><code>(name: string, value: string) =&gt; void</code></td>
      <td>Função chamada ao alterar o valor. Recebe o nome e o novo valor.</td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td><code>string</code></td>
      <td>Valor atual do campo. Padrão: <code>''</code></td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td><code>boolean</code></td>
      <td>Exibe estado de erro visual no input. Padrão: <code>false</code></td>
    </tr>
    <tr>
      <td><code>helperText</code></td>
      <td><code>string</code></td>
      <td>Texto de ajuda ou mensagem de erro.</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td><code>'small'</code> | <code>'medium'</code></td>
      <td>Tamanho do campo. Padrão: <code>'small'</code></td>
    </tr>
    <tr>
      <td><code>fullWidth</code></td>
      <td><code>boolean</code></td>
      <td>Expande para ocupar 100% do container. Padrão: <code>true</code></td>
    </tr>
    <tr>
      <td><code>variant</code></td>
      <td><code>'standard'</code> | <code>'outlined'</code> | <code>'filled'</code></td>
      <td>Visual do componente conforme o padrão do MUI. Padrão: <code>'outlined'</code></td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td><code>TextFieldProps</code></td>
      <td>Demais propriedades suportadas pelo <code>TextField</code> do Material UI.</td>
    </tr>
  </tbody>
</table>

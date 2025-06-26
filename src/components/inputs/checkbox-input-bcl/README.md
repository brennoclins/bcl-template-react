<h2>CheckboxInputBCL</h2>

<p>Componente de checkbox reutilizável baseado no <code>Checkbox</code> do Material UI. Ideal para formulários controlados com uso consistente de nome + valor.</p>

<h3>Uso</h3>

<pre><code>import { CheckboxInputBCL } from '@brennoclins/bcl-template-react'

<CheckboxInputBCL
  label="Inativo"
  name="inativo"
  checked={values.inativo}
  onChange={(name, value) => setFieldValue(name, value)}
/></code></pre>

<h3>Props</h3>

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
      <td><code>label</code></td>
      <td><code>string</code></td>
      <td>Texto exibido ao lado do checkbox.</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td><code>string</code></td>
      <td>Nome do campo, usado como identificador na mudança.</td>
    </tr>
    <tr>
      <td><code>checked</code></td>
      <td><code>boolean</code></td>
      <td>Valor atual do checkbox (marcado ou não).</td>
    </tr>
    <tr>
      <td><code>onChange</code></td>
      <td><code>(name: string, checked: boolean) =&gt; void</code></td>
      <td>Função chamada ao alternar o estado do checkbox.</td>
    </tr>
  </tbody>
</table>

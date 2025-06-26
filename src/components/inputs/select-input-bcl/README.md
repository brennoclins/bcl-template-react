<h2>SelectInputBCL</h2>

<p>Componente reutilizável de seleção baseado no <code>Select</code> do Material UI, com integração simplificada para formulários controlados.</p>

<h3>Uso</h3>

<pre><code>import { SelectInputBCL } from '@brennoclins/bcl-template-react'

<SelectInputBCL
  label="Tipo de Apropriação"
  name="tipo"
  value={values.tipo}
  onChange={(name, value) => setFieldValue(name, value)}
  options={[
    { value: 'ENTRADA', label: 'ENTRADA' },
    { value: 'SAIDA', label: 'SAÍDA' }
  ]}
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
      <td>Rótulo exibido acima do componente.</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td><code>string</code></td>
      <td>Nome do campo. Usado como referência na mudança de valor.</td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td><code>string</code></td>
      <td>Valor atual do campo.</td>
    </tr>
    <tr>
      <td><code>options</code></td>
      <td><code>{ value: string; label: string }[]</code></td>
      <td>Lista de opções disponíveis para seleção.</td>
    </tr>
    <tr>
      <td><code>onChange</code></td>
      <td><code>(name: string, value: string) =&gt; void</code></td>
      <td>Função disparada ao selecionar um valor. Recebe o nome do campo e o valor.</td>
    </tr>
    <tr>
      <td><code>...rest</code></td>
      <td><code>SelectProps</code></td>
      <td>Demais propriedades suportadas pelo <code>Select</code> do MUI.</td>
    </tr>
  </tbody>
</table>

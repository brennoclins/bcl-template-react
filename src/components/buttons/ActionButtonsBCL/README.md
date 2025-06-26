<h2>ActionButtonsBCL</h2>

<p>Componente de botões de ação (Salvar, Excluir, Cancelar) padronizado, com variantes visuais para cada tipo de ação. Baseado no <code>Button</code> do MUI e estilizado com Tailwind + clsx.</p>

<h3>Uso</h3>

<pre><code>import { ActionButtonsBCL } from '@brennoclins/bcl-template-react'

&lt;ActionButtonsBCL
  actionType="novo"
  onSave={handleSave}
  onCancel={handleCancel}
  disabledNew={isSubmitting}
/&gt;
</code></pre>

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
      <td><code>actionType</code></td>
      <td><code>'novo' | 'editar' | 'excluir'</code></td>
      <td>Define o botão principal exibido (Salvar ou Excluir).</td>
    </tr>
    <tr>
      <td><code>onSave</code></td>
      <td><code>() =&gt; void</code></td>
      <td>Função executada ao clicar no botão principal.</td>
    </tr>
    <tr>
      <td><code>onCancel</code></td>
      <td><code>() =&gt; void</code></td>
      <td>Função executada ao clicar no botão "Cancelar".</td>
    </tr>
    <tr>
      <td><code>disabledNew</code></td>
      <td><code>boolean</code></td>
      <td>Desativa o botão de "Salvar" quando em modo <code>novo</code>.</td>
    </tr>
    <tr>
      <td><code>disabledEdit</code></td>
      <td><code>boolean</code></td>
      <td>Desativa o botão de "Salvar" quando em modo <code>editar</code>.</td>
    </tr>
    <tr>
      <td><code>disabledDelete</code></td>
      <td><code>boolean</code></td>
      <td>Desativa o botão de "Excluir" quando em modo <code>excluir</code>.</td>
    </tr>
  </tbody>
</table>

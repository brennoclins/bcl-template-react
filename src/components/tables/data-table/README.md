<h2>📊 DataTableBCL</h2>
<p>
  Tabela com suporte a valores booleanos visuais, edição por célula e botão de exclusão.
  Componente baseado em <code>TableBaseBCL</code>.
</p>

<h3>Props</h3>
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>headers</td>
      <td><code>string[]</code></td>
      <td>Array com os títulos das colunas</td>
    </tr>
    <tr>
      <td>tableRow</td>
      <td><code>string[]</code></td>
      <td>Chaves dos campos que serão exibidos em cada coluna</td>
    </tr>
    <tr>
      <td>rows</td>
      <td><code>T[]</code></td>
      <td>Lista de dados para renderizar</td>
    </tr>
    <tr>
      <td>onEdit?</td>
      <td><code>(row: T) =&gt; void</code></td>
      <td>Função acionada ao clicar na célula (modo de edição)</td>
    </tr>
    <tr>
      <td>onDelete?</td>
      <td><code>(row: T) =&gt; void</code></td>
      <td>Função acionada ao clicar no botão “Excluir”</td>
    </tr>
    <tr>
      <td>booleanIcons?</td>
      <td><code>{ trueIcon?, falseIcon? }</code></td>
      <td>Ícones personalizados para valores booleanos</td>
    </tr>
    <tr>
      <td>booleanColors?</td>
      <td><code>{ trueColor?, falseColor? }</code></td>
      <td>Cores personalizadas dos ícones padrão de booleano</td>
    </tr>
  </tbody>
</table>

<hr />

<h2>📦 TableBaseBCL</h2>
<p>
  Componente genérico para tabelas com renderização livre das células.
  Base de construção do <code>DataTableBCL</code>.
</p>

<h3>Props</h3>
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>headers</td>
      <td><code>string[]</code></td>
      <td>Cabecalhos da tabela</td>
    </tr>
    <tr>
      <td>rows</td>
      <td><code>T[]</code></td>
      <td>Lista de objetos da tabela</td>
    </tr>
    <tr>
      <td>renderRow</td>
      <td><code>(row: T, index: number) =&gt; ReactNode</code></td>
      <td>Função de renderização customizada das células</td>
    </tr>
  </tbody>
</table>

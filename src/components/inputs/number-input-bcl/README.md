<h2>InputNumberBCL</h2>

<p>Componente reutilizável de entrada numérica baseado no <code>TextField</code> do Material UI, com integração simplificada para formulários controlados e herança de propriedades padrão.</p>

<h3>Uso</h3>

<pre><code>import { InputNumberBCL } from '@brennoclins/bcl-template-react'

<InputNumberBCL label="Valor Mensal" name="valorMensal" value={values.valorMensal} onChange={(name, value) => setFieldValue(name, value)} /> </code></pre>

<h3>Props</h3>

<table> <thead> <tr> <th>Prop</th> <th>Tipo</th> <th>Descrição</th> </tr> </thead> <tbody> <tr> <td><code>label</code></td> <td><code>string</code></td> <td>Rótulo exibido acima do campo.</td> </tr> <tr> <td><code>name</code></td> <td><code>string</code></td> <td>Nome do campo. Usado como referência na mudança de valor.</td> </tr> <tr> <td><code>value</code></td> <td><code>number | ''</code></td> <td>Valor atual do campo (aceita número ou string vazia).</td> </tr> <tr> <td><code>onChange</code></td> <td><code>(name: string, value: number | '') =&gt; void</code></td> <td>Função disparada ao alterar o valor. Recebe o nome do campo e o novo valor.</td> </tr> <tr> <td><code>disabled</code></td> <td><code>boolean</code></td> <td>Define se o campo está desabilitado. Padrão: <code>false</code>.</td> </tr> <tr> <td><code>...rest</code></td> <td><code>TextFieldProps</code></td> <td>Demais propriedades suportadas pelo <code>TextField</code> do MUI.</td> </tr> </tbody> </table>

<p>Este componente foi projetado para uso consistente com a arquitetura visual da minha lib, garantindo integração fluida com formulários controlados e compatibilidade com frameworks como Formik e React Hook Form.</p>
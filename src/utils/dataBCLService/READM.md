<h1 align="center">📅 DataBCLService</h1>

<p align="center">
  Utilitário central de datas para projetos BCL-ST. Realiza formatações, conversões e avaliações com foco em exibição legível, formulários compatíveis e comunicação segura com APIs.
</p>

<hr />

<h2>🚀 Funcionalidades</h2>

<ul>
  <li><code>formatForInput(datetime)</code> — converte ISO para valor compatível com <code>&lt;input type="datetime-local" /&gt;</code></li>
  <li><code>formatReadable(datetime)</code> — retorna data legível no padrão <code>dd/MM/yyyy HH:mm</code></li>
  <li><code>convertInputToISO(datetimeLocal)</code> — transforma input local em <strong>ISO UTC</strong></li>
  <li><code>isPastDate(datetime)</code> — verifica se a data já passou (<code>true</code> ou <code>false</code>)</li>
  <li><code>getDateLabel(datetime)</code> — rótulos dinâmicos: <em>"Hoje"</em>, <em>"Ontem"</em>, <em>"Amanhã"</em> ou data formatada</li>
  <li><code>diffInDays(datetime)</code> — diferença absoluta ou relativa de dias</li>
  <li><code>timeUntil(datetime)</code> — frases como <em>"há 2 dias"</em> ou <em>"em 3 dias"</em></li>
</ul>

<hr />

<h2>📦 Exemplo de uso</h2>

<p>Utilização em lógica de exibição ou formulário:</p>

<pre><code>
import { DataBCLService } from 'bcl-template-react'

const dataISO = '2025-07-06T13:00:00Z'

DataBCLService.formatReadable(dataISO)      // → "06/07/2025 10:00"
DataBCLService.formatForInput(dataISO)      // → "2025-07-06T10:00"
DataBCLService.getDateLabel(dataISO)        // → "Hoje"
DataBCLService.timeUntil(dataISO)           // → "em 0 dias"
DataBCLService.isPastDate(dataISO)          // → false
</code></pre>

<hr />

<h2>🎣 Hook: useFormattedDateBCL</h2>

<p>Encapsula o <code>DataBCLService</code> em um hook reativo ideal para uso com inputs, exibição e envio via API.</p>

<pre><code>
import { useFormattedDateBCL } from 'bcl-template-react'

const { inputFormat, readableFormat, isoFormat } = useFormattedDateBCL(values.data)

&lt;TextField type="datetime-local" value={inputFormat} onChange={handleChange} /&gt;

&lt;Typography variant="body2"&gt;
  Visual: {readableFormat}
&lt;/Typography&gt;
</code></pre>

<hr />

<h2>🧠 Aplicações</h2>

<ul>
  <li>Formulários com campos <code>datetime-local</code></li>
  <li>Dashboards, históricos e relatórios</li>
  <li>Envio seguro de datas via <code>PATCH</code> ou <code>POST</code></li>
  <li>Labels dinâmicos em notificações e status</li>
  <li>Lógicas temporais: atrasos, previsões, intervalos</li>
</ul>

<hr />

<h2>📁 Estrutura</h2>

<ul>
  <li><code>src/utils/dataBCLService.ts</code> — serviço principal</li>
  <li><code>src/utils/useFormattedDateBCL.ts</code> — hook de consumo</li>
  <li><code>src/utils/dataBCLService.stories.tsx</code> — documentação interativa</li>
  <li><code>src/utils/useFormattedDateBCL.stories.tsx</code> — demonstração do hook</li>
</ul>

<hr />

<h2>📘 Storybook</h2>

<p>Acesse a visualização interativa para explorar os métodos e comportamento em tempo real:</p>

<ul>
  <li><strong>Utilitário:</strong> <code>BCL / Utils / DataBCLService</code></li>
  <li><strong>Hook:</strong> <code>BCL / Utils / useFormattedDateBCL</code></li>
</ul>

<hr />

<h2>🔗 Repositório</h2>

Projeto mantido por <strong>@brennoclins</strong><br />
👉 <a href="https://github.com/brennoclins/bcl-template-react" target="_blank">github.com/brennoclins/bcl-template-react</a>

<hr />

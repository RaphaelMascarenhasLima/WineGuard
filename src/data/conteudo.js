// Todo o texto do portfólio WineGuard, pronto para usar. Importe onde precisar:
//   import { MARCA, PROBLEMA, AMEACAS, SOLUCAO, CAMADAS, ... } from '../data/conteudo'
// Se mudar um texto, mude AQUI (e não dentro dos componentes).
// Os nomes dos arquivos de imagem são os da pasta img/ do kit.

export const MARCA = {
  nome: 'WineGuard',
  slogan: 'Cada garrafa no ponto certo.',
  resumo:
    'O WineGuard vigia a temperatura, a umidade e a luz de cada adega e avisa na hora, com luz, som e tela, quando algo sai do lugar.',
  grupo: 'marcha.dev',
  curso: 'CP5 Vinheria Full',
  data: 'Entrega em 30/10/2026',
}

export const EQUIPE = ['Enzo Pereira', 'Raphael Mascarenhas', 'Yannick Davila', 'Alysson Souto']

export const LINKS = {
  github: 'https://github.com/enzopereira1701/wineguard',
  wokwi: 'https://wokwi.com/projects/476972184977904641',
  dashboard: '', // preencher quando for publicado (esconder o botão se estiver vazio)
  video: '', // preencher quando o vídeo existir (esconder o botão se estiver vazio)
}

export const PROBLEMA = {
  titulo: 'Vinho guardado errado estraga, e quase ninguém percebe a tempo',
  texto:
    'Uma adega comum não avisa ninguém quando algo sai do ponto. A pessoa só descobre quando o vinho já foi perdido.',
  fonte: 'Resumo de recomendações de especialistas e de fabricantes de adegas. Não é uma norma oficial.',
}

// icone = nome do arquivo em icones/ (sem .svg). cor = token do Tailwind (text-temp, text-umid, text-luz).
export const AMEACAS = [
  {
    chave: 'temperatura',
    rotulo: 'Temperatura',
    icone: 'termometro',
    cor: 'temp',
    imagem: 'ameaca-temperatura.webp',
    texto: 'O calor acelera o envelhecimento. E mais do que o valor, o que prejudica é a temperatura que sobe e desce.',
  },
  {
    chave: 'umidade',
    rotulo: 'Umidade',
    icone: 'gota',
    cor: 'umid',
    imagem: 'ameaca-umidade.webp',
    texto: 'Umidade baixa resseca as rolhas e prejudica o vinho com o tempo. Umidade muito alta danifica rótulos e caixas.',
  },
  {
    chave: 'luminosidade',
    rotulo: 'Luminosidade',
    icone: 'sol',
    cor: 'luz',
    imagem: 'ameaca-luz.webp',
    texto: 'Luz forte altera a cor e o sabor, sobretudo em espumantes e em garrafas de vidro claro.',
  },
]

export const SOLUCAO = {
  titulo: 'Um aparelho por adega, uma plataforma para todas',
  texto: 'O WineGuard junta um dispositivo que vigia e avisa na hora com um painel que mostra tudo e guarda o histórico.',
  garantia: 'Se a internet ou a nuvem cair, o aparelho continua alertando sozinho, com os limites guardados na memória.',
  partes: [
    { nome: 'WineGuard Node', icone: 'chip', texto: 'ESP32 com sensores de temperatura, umidade e luz, e avisos por LED RGB, buzzer e tela OLED, numa caixa impressa em 3D. Um por adega.' },
    { nome: 'Plataforma FIWARE', icone: 'servidor', texto: 'Recebe as leituras por MQTT, guarda o último valor e o histórico, e leva os comandos de volta ao Node.' },
    { nome: 'Backend', icone: 'ajustes', texto: 'Confere os limites de cada adega, abre e fecha alertas e cuida das vinherias e da suspensão.' },
    { nome: 'Dashboard', icone: 'painel', texto: 'Gráficos em tempo real, cadastro de dispositivos, limites, histórico de alertas e vinherias, no computador e no celular.' },
  ],
}

// Sequência real: pode (e deve) ser numerada.
export const CAMADAS = [
  { nome: 'Percepção', icone: 'chip', texto: 'O WineGuard Node, um ESP32 com sensor de temperatura e umidade, sensor de luz, LED RGB, buzzer e tela OLED.', tecnologia: 'ESP32, Arduino (FreeRTOS)' },
  { nome: 'Comunicação', icone: 'sinal', texto: 'O Node envia as leituras por Wi-Fi, com o protocolo MQTT, e recebe comandos pelo mesmo caminho.', tecnologia: 'Wi-Fi 2,4 GHz, MQTT (Mosquitto)' },
  { nome: 'Plataforma', icone: 'servidor', texto: 'FIWARE: o IoT Agent traduz as mensagens, o Orion guarda o último valor e o STH-Comet guarda o histórico.', tecnologia: 'FIWARE, Docker, AWS' },
  { nome: 'Aplicação', icone: 'ajustes', texto: 'O backend confere os limites de cada adega a cada 5 segundos e manda ao Node o comando de alerta.', tecnologia: 'FastAPI (Python)' },
  { nome: 'Apresentação', icone: 'painel', texto: 'O dashboard, que funciona no computador e no celular.', tecnologia: 'React, Vite, Tailwind, Recharts, Vercel' },
]

export const ALERTAS = {
  titulo: 'Alertas que se entendem sem ler',
  texto: 'A cor do LED e a tela dizem qual variável saiu do ponto. O LED e o som dizem se o valor ficou acima ou abaixo do limite.',
  variaveis: [
    { rotulo: 'Temperatura', corLed: 'vermelho', cor: 'temp' },
    { rotulo: 'Umidade', corLed: 'azul', cor: 'umid' },
    { rotulo: 'Luminosidade', corLed: 'verde', cor: 'luz' },
  ],
  sentidos: [
    { situacao: 'Alta (acima do limite)', led: 'Fixo', buzzer: 'Bipe longo, repetido', tela: '"ALTA", o valor e o limite máximo' },
    { situacao: 'Baixa (abaixo do limite)', led: 'Pisca junto com o som', buzzer: '2 bipes e uma pausa', tela: '"BAIXA", o valor e o limite mínimo' },
  ],
  extra: 'Com mais de uma variável em alerta, o Node alterna entre elas, com uma pausa de silêncio no meio. O botão do aparelho silencia só o buzzer: o LED continua.',
}

export const HARDWARE = [
  { item: 'ESP32 DevKit (30 pinos)', funcao: 'Cérebro do aparelho, com Wi-Fi' },
  { item: 'Sensor DHT22', funcao: 'Temperatura e umidade' },
  { item: 'Sensor de luz LDR', funcao: 'Luminosidade' },
  { item: 'LED RGB', funcao: 'Alerta visual por cor' },
  { item: 'Buzzer ativo', funcao: 'Alerta sonoro' },
  { item: 'Tela OLED 128x64', funcao: 'Valores, alertas e estado' },
  { item: 'Botão', funcao: 'Silenciar o buzzer' },
]
export const HARDWARE_NOTA = 'Montagem sem solda, com cabos Dupont, e caixa impressa em 3D (PLA) com tampa removível por parafusos.'

export const VINHERIAS = {
  titulo: 'Uma plataforma, várias vinherias',
  texto: 'Cada vinheria vê só os seus dados. Dentro dela, cada adega tem um ou mais Nodes, e cada Node tem os seus limites.',
  suspensao: 'Se uma vinheria for suspensa (por exemplo, por inadimplência), os Nodes apagam LED e buzzer, param de enviar dados e o painel mostra o aviso de serviço suspenso. O histórico é preservado.',
}

export const DASHBOARD = {
  titulo: 'Um painel para acompanhar tudo',
  itens: [
    { icone: 'painel', nome: 'Painel', texto: 'Valores de agora e gráficos de temperatura, umidade e luz, com os limites marcados.' },
    { icone: 'chip', nome: 'Dispositivos', texto: 'Cadastre um Node e copie o bloco de configuração para o firmware.' },
    { icone: 'ajustes', nome: 'Triggers', texto: 'Ajuste os limites de cada variável, com presets de guarda.' },
    { icone: 'sino', nome: 'Alertas', texto: 'Histórico dos alertas, com o que passou do limite e quando.' },
    { icone: 'predio', nome: 'Vinherias', texto: 'Várias vinherias na mesma plataforma, com suspensão e reativação.' },
  ],
}

export const STACK = [
  { grupo: 'Hardware', itens: ['ESP32', 'Arduino IDE', 'FreeRTOS', 'Wokwi (simulação)'] },
  { grupo: 'Plataforma', itens: ['FIWARE (IoT Agent, Orion, STH-Comet)', 'MQTT / Mosquitto', 'Docker', 'AWS'] },
  { grupo: 'Aplicação', itens: ['FastAPI (Python)'] },
  { grupo: 'Dashboard', itens: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Recharts', 'Vercel'] },
]

// Estado real do projeto em 07/10/2026. Atualize antes de entregar.
export const STATUS = [
  { parte: 'Node: hardware e firmware', estado: 'Pronto', tom: 'ok', detalhe: 'Testado na bancada e no Wokwi' },
  { parte: 'Plataforma FIWARE na AWS', estado: 'Provada', tom: 'ok', detalhe: 'Dados e histórico chegam; comandos chegam ao Node' },
  { parte: 'Dashboard', estado: 'Construído', tom: 'ok', detalhe: 'Com dados de demonstração; falta ligar ao backend' },
  { parte: 'Backend', estado: 'Em construção', tom: 'atencao', detalhe: '' },
  { parte: 'Caixa 3D', estado: 'Em impressão', tom: 'atencao', detalhe: '' },
  { parte: 'Vídeo e manuais', estado: 'A fazer', tom: 'neutro', detalhe: '' },
]

export const CREDITOS = [
  'Base técnica: FIWARE Smart Lamp e FIWARE Descomplicado, do professor Fábio Henrique Cabrini.',
  'As referências de guarda são recomendações de especialistas, não uma norma oficial.',
  'As fotos do site foram geradas com IA.',
]

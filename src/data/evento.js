export const evento = {
  nome: 'Festival Sabores Diversos',
  slogan: 'Três dias para provar o melhor da cozinha da região.',
  data: '4 a 6 de junho de 2027',
  horario: 'das 11h às 21h',
  local: 'Ginásio de Esportes — Osvaldo Cruz/SP',
  sobre: 'Vinte barracas de restaurantes, produtores rurais e cozinheiros da região, com aulas-show e uma competição de pratos feitos com ingredientes locais. A entrada é gratuita; os ingressos são só para as aulas-show com degustação.',
  numeros: [
    { quantidade: '20', legenda: 'Barracas' },
    { quantidade: '9', legenda: 'Aulas-show' },
    { quantidade: '3', legenda: 'Dias de Evento' }
  ]
};

export const programacao = [
  { id: 1, dia: 'Sex', horario: '18h', atividade: 'Abertura com música ao vivo' },
  { id: 2, dia: 'Sáb', horario: '11h', atividade: 'Aula-show: brownie e cookie' },
  { id: 3, dia: 'Sáb', horario: '15h', atividade: 'Aula-show: panqueca e hamburguer' },
  { id: 4, dia: 'Sáb', horario: '19h', atividade: 'Competição de pratos com ingredientes locais' },
  { id: 5, dia: 'Dom', horario: '12h', atividade: 'Almoço italiano tradicional' },
  { id: 6, dia: 'Dom', horario: '17h', atividade: 'Premiação e encerramento' }
];

export const cozinheiros = [
  { nome: 'Sofia Bresser', especialidade: 'Wrap Saudável', descricao: 'Cozinheira com estilo saúdavel, que inova nos sabores sem perder as qualidades.' },
  { nome: 'Chef Luis Ferracini', especialidade: 'Churrasco', descricao: 'Especialista em cortes e assados no fogo de chão.' },
  { nome: 'Beatriz Tacahashi', especialidade: 'Confeitaria', descricao: 'Doces que misturam receitas japonesas e brasileiras' },
  { nome: 'Sítio Boa Vista de Guilherme', especialidade: 'Produtor rural', descricao: 'Queijos e doces artesanais feitos pela família.' }
];

export const tiposIngressos = [
  { valor: 'entrada', texto: 'Entrada — Gratuita' },
  { valor: 'aula-show', texto: 'Aula-show com degustação — R$ 90,00' },
  { valor: 'passaporte', texto: 'Passaporte de aulas-show — R$ 250,00' }
];

export const perguntasFrequentes = [
  { pergunta: 'Aceita cartão?', resposta: 'Sim, todas as barracas aceitam cartão e Pix.' },
  { pergunta: 'Tem opção vegetariana?', resposta: 'Sim, pelo menos cinco barracas têm pratos sem carne.' },
  { pergunta: 'Posso levar meu cachorro?', resposta: 'Pode, desde que na coleira.' }
];

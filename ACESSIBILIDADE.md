# Relatório de acessibilidade

## Antes
- Nota do Lighthouse (mobile):
 A nota que recebi do Lighthouse foi 94.
 
- Problemas apontados pelo Lighthouse:
 Problemas que ele menciona:
 - "As cores de primeiro e segundo plano não têm uma taxa de contraste suficiente."

- Problemas apontados pelo axe:
O axe apontou apenas 1 problema:
- "Os elementos devem atender a limites mínimos de proporção de contraste de cores"
Praticamente o mesmo problema do Lighthouse

- Problemas encontrados no teste do teclado:
De primeira não achei problema, apenas que é um pouco difícil de entender como funciona a navegação pelos botões, mas quando entende da para fazer tudo com eles. Única coisa que não consegui fazer foi acessar as opções do "tipo de ingresso", só tem como ficar com a que já está "Entrada - Gratuita".

## Depois
- Nota do Lighthouse (mobile):
A nota que recebi do Lighthouse foi 96.

- O que foi corrigido:
  - Troquei as cores claras da tabela de programação por tons bem mais escuros para arrumar o contraste.
  - Tirei o `focus:outline-none` que sumia com o foco do teclado e joguei uma borda amarela bem chamativa no `:focus-visible`.
  - Coloquei o link escondido "Pular para o conteúdo" logo no topo do HTML.
  - Adicionei os atributos `autoComplete` no nome e e-mail.
  - Montei o FAQ usando os atributos certinhos de acessibilidade (`aria-expanded` e `aria-controls`) para os leitores de tela.

- O que ainda não está bom (e por quê):
  - Na minha opinião está bom, mas o Lighthouse aponta as cores ainda, ele quer que mude, eu mudei de vermelho para um vermelho bem escuro e constratado, mas ele quer preto e fundo branco -> se eu mudar, na minha opinião, vai ficar pior e sem graça.

## Um problema que a ferramenta NÃO apontou e eu encontrei
O Lighthouse deu nota 94 de primeira e fingiu que estava tudo bem. Ele não percebeu que quem navegava só pelo teclado ficava preso no formulário e não conseguia mudar o tipo de ingresso de jeito nenhum. Só descobri isso fazendo o teste manual apertando Tab e as setas, o que mostra que nota de ferramenta não garante um site 100% acessível na vida real.

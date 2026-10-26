# Conecta Cidade - Projeto (parte 2)

O **Conecta Cidade** é a continuação do projeto desenvolvido anteriormente na disciplina de Web Mobile.

No Projeto 1, criamos um site utilizando HTML, CSS e JavaScript com a proposta de permitir que moradores registrem e acompanhem problemas urbanos, como buracos, falta de iluminação, lixo acumulado e outros problemas encontrados nos bairros.

Nesta segunda etapa, o objetivo será migrar o projeto para **React com Next.js**, mantendo a mesma proposta e identidade visual.

## Integrantes

| Integrante | RA |
|---|---|
| Rhuan Vieira de Souza | 10755828 |
| Caio Borges Morato | 10437025 |
| Felipe Del Giudice Menezes | 10726771 |

Projeto 1: [GitHub - Conecta Cidade](https://github.com/rhuanvieiraa/Projeto_Web_Mobile)

---

## 1. Ideia do Projeto

A ideia do Conecta Cidade surgiu a partir de problemas urbanos que fazem parte do dia a dia da população, como:

- buracos nas ruas;
- iluminação pública com problemas;
- lixo acumulado;
- calçadas danificadas;
- problemas de sinalização.

A proposta é criar um espaço onde os moradores possam registrar essas situações e visualizar ocorrências já cadastradas.

No Projeto 2, continuaremos trabalhando com essa mesma ideia, mas utilizando React e Next.js para melhorar a organização e o funcionamento da aplicação.

---

## 2. Por que é um Projeto Extensionista?

O projeto possui caráter extensionista porque utiliza os conhecimentos aprendidos na faculdade para propor uma solução voltada para um problema real da comunidade.

O Conecta Cidade não foi pensado apenas como um exercício de programação. A proposta é utilizar a tecnologia para facilitar a participação dos moradores no registro e acompanhamento de problemas urbanos.

O público-alvo do projeto é formado principalmente por:

- moradores da cidade;
- pessoas que utilizam as ruas e espaços públicos diariamente;
- associações e lideranças de bairro;
- pessoas interessadas em acompanhar problemas da sua região.

A ideia é aproximar a tecnologia de situações que acontecem no cotidiano da população.

---

## 3. Processo de Ideação

Para iniciar o Projeto 2, primeiro analisamos o projeto desenvolvido anteriormente.

A partir dessa análise, pensamos em quais partes poderiam ser melhoradas durante a migração para React e Next.js.

Entre os principais pontos identificados estão:

- elementos como cabeçalho e rodapé eram repetidos em várias páginas;
- os cards das denúncias poderiam ser reutilizados;
- algumas funcionalidades estavam concentradas em um único arquivo JavaScript;
- seria possível organizar melhor as páginas e os componentes;
- o projeto poderia apresentar as informações de forma mais dinâmica.

Com isso, decidimos manter a proposta original do Conecta Cidade, mas reorganizar sua estrutura utilizando os recursos que serão estudados durante o Projeto 2.

---

## 4. Público-Alvo

Durante a ideação, pensamos principalmente em pessoas que enfrentam problemas urbanos no dia a dia.

Alguns exemplos de possíveis usuários são:

### Moradores

Pessoas que encontram algum problema no bairro e desejam registrar a ocorrência.

### Pessoas que circulam pela cidade

Pedestres, ciclistas, motoristas e usuários do transporte público que podem identificar problemas nas ruas.

### Lideranças comunitárias

Pessoas que acompanham as necessidades do bairro e podem utilizar as denúncias para visualizar problemas recorrentes na região.

Pensando nesse público, buscamos manter uma interface simples, fácil de entender e adaptada também para dispositivos móveis.

---

## 5. Protótipo em Wireframe

Antes de iniciar a programação em React e Next.js, criamos um wireframe baseado na estrutura atual do Conecta Cidade.

O wireframe foi utilizado para representar de forma simples a organização das principais telas do projeto e ajudar no planejamento da migração.

As telas representadas foram:

- página inicial;
- menu mobile;
- login e cadastro;
- lista de denúncias;
- formulário de nova denúncia.

O protótipo mantém a ideia visual do Projeto 1, mas apresenta as telas de forma simplificada para facilitar a visualização da estrutura.

<img width="1448" height="1086" alt="56814727-980c-404a-aabd-5eea2f29203e" src="https://github.com/user-attachments/assets/9798e773-06fe-4586-99f1-cf97a5d22ec9" />


---

## 6. Migração para React e Next.js

No Projeto 1, o site foi desenvolvido utilizando HTML, CSS e JavaScript tradicional.

No Projeto 2, a aplicação será reconstruída utilizando **React e Next.js**.

A principal vantagem dessa mudança será a possibilidade de dividir a interface em partes reutilizáveis.

Por exemplo, elementos como:

- cabeçalho;
- rodapé;
- cards de denúncia;
- formulários;

poderão ser organizados como componentes.

Dessa forma, não será necessário escrever o mesmo código várias vezes, facilitando a organização e a manutenção do projeto.

Essa parte será desenvolvida aos poucos durante os próximos check-ins.

## Check-in 2 - Migração do HTML e CSS

Nesta etapa, iniciamos a migração do Conecta Cidade para Next.js.

As páginas do Projeto 1, que anteriormente eram arquivos HTML separados, foram convertidas para páginas utilizando JSX dentro da estrutura do Next.js.

Foram migradas as seguintes páginas:

- Página Inicial;
- Nova Denúncia;
- Login e Cadastro;
- Minhas Denúncias.

Durante a migração, algumas adaptações foram necessárias, como:

- troca de `class` por `className`;
- troca de `for` por `htmlFor`;
- fechamento correto das tags em JSX;
- organização das páginas através das rotas do Next.js;
- migração do CSS geral para `globals.css`;
- transferência das imagens para a pasta `public`.

A identidade visual e a responsividade do Projeto 1 foram mantidas.

<img width="1834" height="997" alt="image" src="https://github.com/user-attachments/assets/81247d3c-f31b-45b6-a3e5-8f8fb08566e2" />


Neste check-in, o foco foi a migração da estrutura HTML e do CSS. As funcionalidades JavaScript serão adaptadas para React nas próximas etapas.

---

## 7. Uso de Inteligência Artificial

Durante a primeira etapa do Projeto 2, utilizamos ferramentas de Inteligência Artificial como apoio no desenvolvimento.

A IA foi utilizada principalmente para:

- auxiliar na análise do Projeto 1;
- ajudar na organização das ideias;
- auxiliar na estruturação do README;
- apoiar a criação do wireframe;
- ajudar na pesquisa e organização das informações utilizadas no projeto.

O uso da ferramenta foi feito como apoio ao desenvolvimento, e o grupo será responsável por compreender e explicar todas as partes implementadas no projeto.

Esta seção será atualizada caso a IA seja utilizada novamente nas próximas etapas.

O wireframe permitiu visualizar previamente as principais telas e pensar na organização do projeto antes de começar a implementação.

A partir da próxima etapa, iniciaremos a criação do projeto em Next.js e a migração da estrutura já desenvolvida anteriormente.

Este README será atualizado conforme o desenvolvimento do projeto.

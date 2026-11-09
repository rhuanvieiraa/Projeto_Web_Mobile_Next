# Conecta Cidade - Projeto 2

O **Conecta Cidade** é a continuação do projeto desenvolvido anteriormente na disciplina de Web Mobile.

No Projeto 1, a aplicação foi desenvolvida utilizando **HTML, CSS e JavaScript**, com a proposta de permitir que moradores registrem e acompanhem problemas urbanos encontrados em seus bairros.

Entre os problemas que podem ser registrados estão:

- buracos em ruas e avenidas;
- problemas de iluminação pública;
- lixo ou entulho acumulado;
- problemas de sinalização;
- outras ocorrências relacionadas à infraestrutura urbana.

No Projeto 2, a proposta foi mantida, porém a aplicação está sendo migrada para **React com Next.js**.

Essa migração permite melhorar a organização do código, reutilizar componentes, utilizar rotas do Next.js e trabalhar com dados através de uma API interna.

O projeto ainda está em desenvolvimento e este README apresenta o que foi realizado até o momento.

---

## Integrantes

| Integrante | RA |
| --- | --- |
| Rhuan Vieira de Souza | 10755828 |
| Caio Borges Morato | 10437025 |
| Felipe Del Giudice Menezes | 10726771 |

### Repositórios

Projeto 1:

[GitHub - Conecta Cidade Projeto 1](https://github.com/rhuanvieiraa/Projeto_Web_Mobile)

Projeto 2:

[GitHub - Conecta Cidade Projeto 2](https://github.com/rhuanvieiraa/Projeto_Web_Mobile_Next)

---

## 1. Ideia do Projeto

A ideia do Conecta Cidade surgiu a partir da observação de problemas urbanos presentes no cotidiano da população.

Situações como buracos nas ruas, postes sem iluminação, lixo acumulado e problemas de sinalização podem afetar diretamente moradores, pedestres, ciclistas e motoristas.

A proposta do projeto é disponibilizar uma interface simples na qual o usuário possa visualizar ocorrências e registrar informações sobre problemas encontrados na cidade.

Até o momento, o sistema possui funcionalidades relacionadas a:

- visualização de denúncias recentes;
- formulário para registro de uma nova ocorrência;
- visualização das denúncias;
- acesso aos detalhes de cada denúncia;
- simulação de cadastro e login de usuário;
- navegação entre diferentes páginas;
- menu adaptado para dispositivos móveis;
- consumo de dados através de uma API interna.

---

## 2. Por que é um Projeto Extensionista?

O projeto possui caráter extensionista porque utiliza conhecimentos desenvolvidos durante a disciplina para propor uma solução relacionada a um problema real da comunidade.

O Conecta Cidade não foi pensado somente como um exercício de programação.

A proposta é aplicar conteúdos de desenvolvimento web em uma situação que pode fazer parte da rotina da população, criando uma forma organizada de registrar e visualizar problemas urbanos.

O projeto busca aproximar a tecnologia das necessidades da comunidade, utilizando programação para representar uma possível solução para situações encontradas nos bairros e espaços públicos.

---

## 3. Público-Alvo

O público-alvo do Conecta Cidade é formado principalmente por pessoas que utilizam os espaços urbanos diariamente.

### Moradores

Pessoas que encontram problemas próximos de suas casas ou dentro de seus bairros.

### Pedestres e ciclistas

Pessoas que podem identificar problemas em ruas, calçadas, iluminação ou sinalização durante seus deslocamentos.

### Motoristas

Usuários que podem encontrar problemas como buracos, falta de sinalização ou obstáculos nas vias.

### Lideranças comunitárias

Pessoas que acompanham necessidades recorrentes de uma determinada região ou bairro.

Pensando nesse público, buscamos manter uma interface simples, de fácil entendimento e adaptada também para dispositivos móveis.

---

## 4. Processo de Ideação

Antes de iniciar o Projeto 2, analisamos a estrutura criada no Projeto 1.

Durante essa análise, identificamos alguns pontos que poderiam ser melhorados com a utilização de React e Next.js.

Entre eles:

- cabeçalho e rodapé eram repetidos em diferentes páginas;
- os cards de denúncia possuíam estruturas semelhantes;
- formulários poderiam ser transformados em componentes;
- algumas funcionalidades estavam concentradas no JavaScript tradicional;
- a navegação poderia utilizar o sistema de rotas do Next.js;
- os dados das denúncias poderiam ser carregados dinamicamente;
- o código poderia ser melhor separado entre páginas, componentes e dados.

A partir disso, decidimos manter a identidade e a proposta do Projeto 1, mas reorganizar internamente a aplicação durante a migração.

---

## 5. Protótipo em Wireframe

Antes da implementação em React e Next.js, foi criado um wireframe representando as principais telas planejadas para o projeto.

As telas representadas foram:

- página inicial;
- menu mobile;
- login e cadastro;
- lista de denúncias;
- formulário de nova denúncia.

O wireframe foi utilizado como referência para manter a organização visual do projeto e ajudar no planejamento da migração.

<img width="1448" height="1086" alt="Wireframe Conecta Cidade" src="https://github.com/user-attachments/assets/9798e773-06fe-4586-99f1-cf97a5d22ec9" />

---

## 6. Tecnologias Utilizadas

Até o momento, o Projeto 2 utiliza:

- HTML através de JSX;
- CSS;
- JavaScript;
- React;
- Next.js;
- Node.js;
- npm;
- Git;
- GitHub.

Versões utilizadas atualmente no projeto:

- Next.js 16.4.3;
- React 19.3.0;
- React DOM 19.3.0.

Não foram utilizados Tailwind CSS ou TypeScript.

O CSS principal da aplicação está localizado em:

```text
src/app/globals.css
```

---

## 7. Migração para React e Next.js

No Projeto 1, as páginas eram desenvolvidas utilizando arquivos HTML separados.

No Projeto 2, essas páginas passaram a utilizar a estrutura do Next.js dentro da pasta:

```text
src/app
```

Durante a migração, também foi necessário adaptar o HTML tradicional para JSX.

Algumas alterações realizadas foram:

```text
class → className

for → htmlFor
```

Também foi necessário:

- fechar corretamente as tags utilizadas em JSX;
- adaptar os caminhos das imagens;
- organizar as imagens dentro da pasta `public`;
- transformar páginas HTML em arquivos `page.js`;
- separar elementos repetidos em componentes;
- migrar funcionalidades do JavaScript tradicional para recursos do React.

---

## 8. Desenvolvimento por Check-ins

### Check-in 1 - Ideação e Wireframe

A primeira etapa foi dedicada ao planejamento do Projeto 2.

Foram realizadas:

- análise do Projeto 1;
- identificação das partes que poderiam ser melhoradas;
- definição do público-alvo;
- análise do caráter extensionista;
- planejamento da migração para React e Next.js;
- criação do wireframe.

---

### Check-in 2 - Migração do HTML e CSS

Nesta etapa, foi criada a estrutura inicial do projeto utilizando Next.js.

As páginas principais do Projeto 1 começaram a ser migradas para JSX.

As telas trabalhadas foram:

- Página Inicial;
- Login e Cadastro;
- Criar Denúncia;
- Minhas Denúncias.

O CSS também foi migrado para:

```text
src/app/globals.css
```

As imagens utilizadas pelo projeto foram organizadas dentro de:

```text
public/imagens
```

Durante essa etapa, foram realizadas adaptações necessárias para o funcionamento do código em JSX, como:

- utilização de `className`;
- utilização de `htmlFor`;
- fechamento correto das tags;
- adaptação dos caminhos das imagens;
- organização das páginas utilizando a estrutura do Next.js.

A identidade visual do Projeto 1 foi mantida durante a migração.

<img width="1834" height="997" alt="Conecta Cidade em Next.js" src="https://github.com/user-attachments/assets/81247d3c-f31b-45b6-a3e5-8f8fb08566e2" />

---

### Check-in 3 - Componentização e Interatividade

Depois da migração inicial das páginas, começamos a separar partes da aplicação em componentes React.

Foram criados os seguintes componentes:

| Componente | Responsabilidade |
| --- | --- |
| `Header` | Cabeçalho, menu e navegação |
| `Footer` | Rodapé |
| `Hero` | Área principal de apresentação da página inicial |
| `SobreNos` | Seção de apresentação do projeto |
| `CardDenuncia` | Estrutura utilizada para exibir uma denúncia |
| `FormularioDenuncia` | Formulário para registro de uma ocorrência |
| `FormLogin` | Formulário de login |
| `FormCadastro` | Formulário de cadastro |
| `DetalheDenuncia` | Exibição das informações de uma denúncia específica |

A componentização permite reutilizar estruturas sem precisar repetir todo o código em diferentes páginas.

### Props

O componente `CardDenuncia` utiliza props para receber diferentes informações.

Exemplo:

```jsx
<CardDenuncia
    id={denuncia.id}
    titulo={denuncia.titulo}
    bairro={denuncia.bairro}
    status={denuncia.status}
    descricao={denuncia.descricao}
/>
```

Com isso, o mesmo componente pode ser utilizado para representar várias denúncias.

### useState

O `useState` foi utilizado para controlar informações que podem mudar durante o uso da aplicação.

Entre os exemplos estão:

- abertura e fechamento do menu mobile;
- campos do formulário de login;
- campos do formulário de cadastro;
- campos do formulário de denúncia;
- estado do usuário logado;
- dados das denúncias recebidos da API.

Exemplo:

```javascript
const [denuncias, setDenuncias] = useState([]);
```

### useEffect

O `useEffect` foi utilizado quando alguma ação precisa acontecer depois que o componente é carregado.

No projeto, ele é utilizado para:

- verificar se existe um usuário logado;
- buscar os dados das denúncias através da API.

---

### Check-in 4 - Rotas Simples e Dinâmicas

Nesta etapa, começamos a trabalhar com o sistema de rotas do Next.js.

O projeto possui as seguintes rotas simples:

```text
/
/login
/denuncia
/minhas-denuncias
```

Cada pasta dentro de `src/app` possui seu próprio arquivo `page.js`, responsável pela página daquela rota.

Também foi criada uma rota dinâmica:

```text
/denuncias/[id]
```

A estrutura utilizada é:

```text
src/app/denuncias/[id]/page.js
```

O `[id]` representa o identificador de uma denúncia.

Por exemplo:

```text
/denuncias/1
```

representa a denúncia de ID 1.

Outro exemplo:

```text
/denuncias/2
```

representa a denúncia de ID 2.

Com isso, não é necessário criar uma página diferente para cada denúncia.

A mesma página dinâmica pode receber diferentes identificadores.

Também passamos a utilizar o componente `Link` do Next.js para a navegação entre páginas internas.

Exemplo:

```javascript
import Link from "next/link";
```

E na navegação:

```jsx
<Link href="/denuncia">
    Criar Denúncia
</Link>
```

No componente `CardDenuncia`, o identificador é utilizado para criar dinamicamente o endereço da página de detalhes.

```jsx
<Link href={`/denuncias/${props.id}`}>
    Ver detalhes
</Link>
```

---

### Check-in 5 - API, JSON e Fetch

Na etapa atual, começamos a trabalhar com uma API interna utilizando o Next.js.

Os dados das denúncias foram separados da interface e organizados no arquivo:

```text
src/lib/db.js
```

Também foram criadas rotas de API utilizando arquivos `route.js`.

Atualmente existem duas rotas `GET`:

```text
GET /api/denuncias
```

e:

```text
GET /api/denuncias/[id]
```

A primeira retorna todas as denúncias.

A segunda busca uma denúncia específica através de seu identificador.

Esses dados passaram a ser consumidos pela interface utilizando:

- `fetch`;
- `useEffect`;
- `useState`;
- `.map()`.

Com isso, as denúncias não precisam mais ser escritas manualmente em cada página.

---

## 9. Login e Cadastro

O projeto possui atualmente uma simulação de cadastro e login.

O cadastro utiliza `localStorage` para armazenar os dados do usuário no navegador.

Um objeto com as informações do usuário é criado e convertido para JSON.

Exemplo:

```javascript
const usuario = {
    nome,
    email,
    senha
};

localStorage.setItem("usuario", JSON.stringify(usuario));
```

O `JSON.stringify()` transforma o objeto JavaScript em texto para que ele possa ser armazenado no `localStorage`.

No login, os dados armazenados são recuperados e transformados novamente em um objeto JavaScript utilizando `JSON.parse()`.

Exemplo:

```javascript
const usuarioSalvo = localStorage.getItem("usuario");
const usuario = JSON.parse(usuarioSalvo);
```

Depois disso, o e-mail e a senha informados são comparados com os dados cadastrados.

Quando o login é realizado com sucesso, o projeto armazena:

```text
logado = true
```

no `localStorage`.

O componente `Header` utiliza `useEffect` para verificar essa informação.

Quando o usuário não está logado, a opção exibida no menu é:

```text
Login
```

Quando existe um usuário logado, a opção passa a ser:

```text
Sair
```

Ao clicar em sair, a informação de login é removida do `localStorage`.

Esse sistema é apenas uma **simulação acadêmica de autenticação**.

Não existe autenticação real ou banco de dados de usuários.

---

## 10. Menu Mobile

O menu mobile também foi adaptado para utilizar recursos do React.

O estado do menu é controlado utilizando:

```javascript
const [menuAberto, setMenuAberto] = useState(false);
```

Quando o usuário clica no botão do menu, o estado é alterado.

A função utilizada é:

```javascript
function alternarMenu() {
    setMenuAberto(!menuAberto);
}
```

O estado também é utilizado para definir a classe CSS do menu.

```jsx
className={menuAberto ? "menu-aberto" : ""}
```

Dessa forma, a abertura e o fechamento do menu são controlados pelo React.

---

## 11. Formulário de Denúncia

O formulário de denúncia foi transformado em um componente React.

Os campos são controlados utilizando `useState`.

Entre os dados utilizados estão:

- título;
- categoria;
- bairro;
- descrição.

Durante o envio do formulário, é criado um objeto JavaScript com os dados preenchidos.

Exemplo:

```javascript
const novaDenuncia = {
    titulo,
    categoria,
    bairro,
    descricao
};
```

Atualmente, o formulário demonstra o funcionamento dos estados e do envio utilizando React.

A nova denúncia ainda **não é enviada para a API e não é armazenada permanentemente**.

O campo para selecionar uma foto também está presente na interface, porém a imagem ainda não é armazenada.

---

## 12. Rotas do Projeto

O Next.js utiliza a estrutura de pastas dentro de `src/app` para criar as páginas da aplicação.

### Página Inicial

```text
/
```

Arquivo:

```text
src/app/page.js
```

A página inicial apresenta:

- cabeçalho;
- área de apresentação;
- denúncias recentes;
- seção sobre o projeto;
- formulário para registrar uma ocorrência;
- rodapé.

---

### Login

```text
/login
```

Arquivo:

```text
src/app/login/page.js
```

Essa página contém os componentes relacionados ao login e cadastro.

---

### Criar Denúncia

```text
/denuncia
```

Arquivo:

```text
src/app/denuncia/page.js
```

Essa página utiliza o componente `FormularioDenuncia`.

---

### Minhas Denúncias

```text
/minhas-denuncias
```

Arquivo:

```text
src/app/minhas-denuncias/page.js
```

Essa página busca os dados através da API e exibe as denúncias utilizando `CardDenuncia`.

---

### Detalhes da Denúncia

```text
/denuncias/[id]
```

Arquivo:

```text
src/app/denuncias/[id]/page.js
```

Essa é uma rota dinâmica que utiliza o identificador da denúncia.

Exemplos:

```text
/denuncias/1
/denuncias/2
```

---

## 13. API Interna com Next.js

No Check-in 5 foi criada uma API interna para disponibilizar os dados das denúncias.

A API está localizada em:

```text
src/app/api/denuncias
```

### GET de Todas as Denúncias

O endpoint:

```text
GET /api/denuncias
```

é responsável por retornar todas as denúncias disponíveis.

O arquivo responsável é:

```text
src/app/api/denuncias/route.js
```

Código utilizado:

```javascript
import { denuncias } from "../../../lib/db";

export async function GET() {
    return Response.json(denuncias);
}
```

O arquivo importa as denúncias e utiliza `Response.json()` para retornar os dados em formato JSON.

---

## 14. API Dinâmica por ID

Também foi criada uma rota dinâmica dentro da API.

O endpoint é:

```text
GET /api/denuncias/[id]
```

O arquivo responsável é:

```text
src/app/api/denuncias/[id]/route.js
```

Exemplos de acesso:

```text
/api/denuncias/1
/api/denuncias/2
```

O ID recebido pela rota é utilizado para procurar a denúncia correspondente.

```javascript
const denuncia = denuncias.find((item) => {
    return item.id === Number(id);
});
```

O `find()` procura dentro do array a denúncia cujo ID corresponde ao valor recebido pela URL.

O `Number()` é utilizado porque o parâmetro recebido através da URL é convertido para número antes da comparação.

Quando a denúncia é encontrada, ela é retornada:

```javascript
return Response.json(denuncia);
```

Quando não existe uma denúncia com aquele identificador, a API retorna:

```json
{
    "erro": "Denúncia não encontrada"
}
```

com status HTTP `404`.

Isso pode ser testado acessando, por exemplo:

```text
/api/denuncias/50
```

---

## 15. Fonte de Dados

Os dados utilizados pela API estão atualmente organizados em:

```text
src/lib/db.js
```

Nesse arquivo existe um array chamado `denuncias`.

Exemplo:

```javascript
export const denuncias = [
    {
        id: 1,
        titulo: "Buraco na via principal",
        protocolo: "#2026001",
        data: "10/03/2026",
        bairro: "Pinheiros",
        status: "Pendente",
        descricao: "Existe um buraco na pista da direita provocando risco aos motoristas."
    },
    {
        id: 2,
        titulo: "Poste com Iluminação Queimada",
        protocolo: "#2026002",
        data: "15/03/2026",
        bairro: "Butantã",
        status: "Resolvido",
        descricao: "Rua escura perto da travessa principal."
    }
];
```

Cada denúncia é representada por um objeto contendo informações como:

- ID;
- título;
- protocolo;
- data;
- bairro;
- status;
- descrição.

Atualmente, esses dados são fixos.

Não existe banco de dados conectado ao projeto.

O arquivo `db.js` está sendo utilizado para representar uma fonte de dados simples durante o aprendizado sobre APIs.

---

## 16. Consumo da API com Fetch

A API é consumida dentro dos componentes React utilizando `fetch`.

Na página inicial, por exemplo, é criado um estado para armazenar as denúncias.

```javascript
const [denuncias, setDenuncias] = useState([]);
```

Depois, o `useEffect` realiza a requisição.

```javascript
useEffect(() => {
    fetch("/api/denuncias")
        .then((resposta) => resposta.json())
        .then((dados) => {
            setDenuncias(dados);
        });
}, []);
```

Primeiro, o `fetch` acessa:

```text
/api/denuncias
```

Depois, a resposta é transformada em JSON:

```javascript
resposta.json()
```

Por último, os dados são armazenados no estado utilizando:

```javascript
setDenuncias(dados);
```

O fluxo pode ser representado da seguinte forma:

```text
Página React
    ↓
useEffect
    ↓
fetch("/api/denuncias")
    ↓
GET
    ↓
API do Next.js
    ↓
db.js
    ↓
JSON
    ↓
setDenuncias(dados)
    ↓
Interface atualizada
```

---

## 17. Renderização das Denúncias

Depois que os dados são recebidos da API, a lista de denúncias é percorrida utilizando `.map()`.

Exemplo:

```jsx
{denuncias.map((denuncia) => (
    <CardDenuncia
        key={denuncia.id}
        id={denuncia.id}
        titulo={denuncia.titulo}
        bairro={denuncia.bairro}
        status={denuncia.status}
        descricao={denuncia.descricao}
    />
))}
```

Para cada denúncia encontrada no array, um novo componente `CardDenuncia` é renderizado.

O `key` utiliza:

```javascript
denuncia.id
```

porque cada denúncia possui um identificador diferente.

Os dados também são enviados para o componente através de props.

---

## 18. Detalhes da Denúncia

Ao clicar em **Ver detalhes** em um card, o usuário é direcionado para uma rota dinâmica.

Por exemplo:

```text
/denuncias/1
```

A página dinâmica recebe o ID.

```javascript
const { id } = await params;
```

Depois, esse identificador é enviado para o componente:

```jsx
<DetalheDenuncia id={id} />
```

Dentro de `DetalheDenuncia`, é utilizado um novo `fetch`.

```javascript
fetch(`/api/denuncias/${props.id}`)
```

Se o ID for 1, a requisição será:

```text
/api/denuncias/1
```

Se o ID for 2:

```text
/api/denuncias/2
```

O componente possui inicialmente o estado:

```javascript
const [denuncia, setDenuncia] = useState(null);
```

Enquanto os dados ainda não foram recebidos, é exibido:

```text
Carregando...
```

Depois que a API responde, são apresentados:

- título;
- protocolo;
- data;
- bairro;
- status;
- descrição.

Caso a denúncia não exista, a mensagem retornada pela API é exibida.

Por exemplo:

```text
/denuncias/50
```

apresenta:

```text
Denúncia não encontrada
```

---

## 19. Estrutura Atual do Projeto

A estrutura principal do projeto está organizada atualmente da seguinte forma:

```text
conecta-cidade-next/
│
├── public/
│   └── imagens/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── denuncias/
│   │   │       ├── route.js
│   │   │       └── [id]/
│   │   │           └── route.js
│   │   │
│   │   ├── components/
│   │   │   ├── CardDenuncia.jsx
│   │   │   ├── DetalheDenuncia.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FormCadastro.jsx
│   │   │   ├── FormLogin.jsx
│   │   │   ├── FormularioDenuncia.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── SobreNos.jsx
│   │   │
│   │   ├── denuncia/
│   │   │   └── page.js
│   │   │
│   │   ├── denuncias/
│   │   │   └── [id]/
│   │   │       └── page.js
│   │   │
│   │   ├── login/
│   │   │   └── page.js
│   │   │
│   │   ├── minhas-denuncias/
│   │   │   └── page.js
│   │   │
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   └── lib/
│       └── db.js
│
├── package.json
├── package-lock.json
└── README.md
```

Essa organização separa:

- páginas;
- componentes;
- rotas da API;
- dados;
- estilos;
- imagens.

---

## 20. Como Executar o Projeto

### Pré-requisitos

Para executar o projeto localmente, é necessário possuir:

- Node.js;
- npm;
- Git.

### Clonar o repositório

```bash
git clone https://github.com/rhuanvieiraa/Projeto_Web_Mobile_Next.git
```

### Entrar na pasta do projeto

```bash
cd Projeto_Web_Mobile_Next
```

### Instalar as dependências

```bash
npm install
```

### Executar o projeto

```bash
npm run dev
```

Depois, acessar:

```text
http://localhost:3000
```

O projeto também pode ser executado utilizando GitHub Codespaces.

---

## 21. Como Testar a API

Com o projeto executando, os endpoints podem ser acessados diretamente pelo navegador.

### Todas as denúncias

```text
http://localhost:3000/api/denuncias
```

Essa rota retorna um array contendo todas as denúncias.

### Denúncia de ID 1

```text
http://localhost:3000/api/denuncias/1
```

Essa rota retorna somente a denúncia de ID 1.

### Denúncia de ID 2

```text
http://localhost:3000/api/denuncias/2
```

Essa rota retorna somente a denúncia de ID 2.

### ID inexistente

```text
http://localhost:3000/api/denuncias/50
```

Nesse caso, a API retorna:

```json
{
    "erro": "Denúncia não encontrada"
}
```

---

## 22. Andamento Atual

Até o momento, o Projeto 2 possui:

- estrutura criada com React e Next.js;
- páginas do Projeto 1 migradas para JSX;
- estilos migrados para `globals.css`;
- imagens organizadas na pasta `public`;
- componentes React reutilizáveis;
- utilização de props;
- utilização de `useState`;
- utilização de `useEffect`;
- menu mobile interativo;
- simulação de cadastro e login utilizando `localStorage`;
- formulário de denúncia controlado pelo React;
- rotas simples;
- rota dinâmica utilizando `[id]`;
- navegação interna utilizando `Link`;
- API interna utilizando Next.js;
- dados organizados em `src/lib/db.js`;
- rota `GET` para listar denúncias;
- rota `GET` para buscar uma denúncia pelo ID;
- consumo da API utilizando `fetch`;
- renderização das denúncias utilizando `.map()`;
- página de detalhes carregando os dados de acordo com o ID da denúncia;
- tratamento de ID de denúncia inexistente.

O projeto continua em desenvolvimento e novas funcionalidades ainda serão implementadas durante as próximas etapas da disciplina.

---

## 23. Limitações Atuais

Como o projeto ainda está sendo desenvolvido, algumas funcionalidades ainda são simplificadas.

### Login e Cadastro

O cadastro e o login utilizam `localStorage` como uma simulação acadêmica.

Ainda não existe autenticação real ou banco de dados para usuários.

### Cadastro de Denúncias

O formulário utiliza `useState` e cria um objeto com as informações preenchidas.

Porém, uma nova denúncia ainda não é enviada para a API e não é armazenada permanentemente.

### Dados das Denúncias

Atualmente, as denúncias utilizadas pela API estão armazenadas em:

```text
src/lib/db.js
```

Os dados são fixos e ainda não existe um banco de dados conectado ao projeto.

### Imagens

O formulário possui um campo para selecionar uma imagem, porém a imagem ainda não é armazenada.

Esses pontos representam o estado atual da aplicação e poderão ser alterados conforme o desenvolvimento do projeto e os conteúdos das próximas aulas.

---

## 24. Uso de Inteligência Artificial

Durante o desenvolvimento do Projeto 2, ferramentas de Inteligência Artificial foram utilizadas como apoio ao aprendizado e à implementação.

O grupo continua responsável por compreender, revisar e explicar o funcionamento das partes implementadas no projeto.

### Check-in 1

A IA foi utilizada para:

- auxiliar na organização das ideias;
- auxiliar na estruturação do README;
- apoiar a criação do wireframe;
- organizar informações do Projeto 1 para planejar a migração.

### Check-in 2

A IA foi utilizada para:

- auxiliar na conversão das páginas HTML para JSX;
- auxiliar na identificação de alterações necessárias, como `className` e `htmlFor`;
- auxiliar na organização inicial do projeto em Next.js;
- ajudar na adaptação dos caminhos das imagens;
- auxiliar na identificação e correção de erros de imports;
- auxiliar no uso de Git e GitHub durante o desenvolvimento.

### Check-in 3

A IA foi utilizada para:

- auxiliar na organização da componentização;
- orientar a criação de componentes reutilizáveis;
- auxiliar no entendimento e utilização de props;
- auxiliar no entendimento e utilização de `useState`;
- auxiliar no entendimento e utilização de `useEffect`;
- auxiliar na migração das funcionalidades do JavaScript tradicional para React;
- auxiliar na implementação do menu mobile;
- auxiliar na implementação do login, cadastro e logout;
- auxiliar na organização dos formulários.

### Check-in 4

A IA foi utilizada para:

- auxiliar na organização das rotas do Next.js;
- orientar a criação da rota dinâmica utilizando `[id]`;
- auxiliar no entendimento dos parâmetros das rotas;
- auxiliar na utilização do componente `Link`;
- ajudar na identificação e correção de problemas relacionados aos caminhos das rotas.

### Check-in 5

Até o momento, durante o desenvolvimento do Check-in 5, a IA foi utilizada para:

- auxiliar na organização da API interna;
- orientar a criação dos arquivos `route.js`;
- auxiliar na criação e organização do arquivo `src/lib/db.js`;
- auxiliar na implementação das rotas `GET`;
- orientar a criação da rota dinâmica da API utilizando `[id]`;
- auxiliar na utilização de `fetch`;
- auxiliar no consumo dos dados utilizando `useEffect` e `useState`;
- auxiliar na renderização dos dados utilizando `.map()`;
- auxiliar na integração entre a rota dinâmica da página e a rota dinâmica da API;
- auxiliar na identificação e correção de problemas relacionados à estrutura das pastas;
- auxiliar na identificação do conflito entre `page.js` e `route.js`;
- auxiliar nos testes das rotas da API;
- auxiliar no tratamento de uma denúncia não encontrada.

Esta seção continuará sendo atualizada conforme o desenvolvimento do projeto.

---

## 25. Aprendizados até o Momento

Durante o desenvolvimento do Projeto 2 até esta etapa, foram aplicados conteúdos estudados durante a disciplina.

Entre os principais conceitos utilizados estão:

- JSX;
- componentes React;
- reutilização de componentes;
- props;
- `useState`;
- `useEffect`;
- formulários controlados;
- `localStorage`;
- objetos JavaScript;
- JSON;
- `JSON.stringify()`;
- `JSON.parse()`;
- rotas simples;
- rotas dinâmicas;
- `Link`;
- API interna no Next.js;
- método HTTP `GET`;
- `fetch`;
- transformação da resposta em JSON;
- `.map()`;
- `.find()`;
- tratamento de registros através de ID;
- organização de dados em um arquivo separado;
- organização de páginas e componentes;
- Git e GitHub.

Uma das principais diferenças percebidas em relação ao Projeto 1 foi a organização do código.

No Projeto 1, diversas estruturas e funcionalidades estavam diretamente ligadas às páginas HTML e ao JavaScript tradicional.

Com React e Next.js, essas responsabilidades começaram a ser separadas entre:

- páginas;
- componentes;
- estados;
- efeitos;
- rotas;
- API;
- dados.

Essa separação facilita a reutilização de partes da aplicação e ajuda a entender melhor a responsabilidade de cada arquivo.

---

## 26. Próximas Etapas

O Conecta Cidade ainda está em desenvolvimento.

As próximas alterações serão realizadas de acordo com os conteúdos apresentados durante as próximas aulas e com os requisitos das próximas etapas do projeto.

O README também continuará sendo atualizado para registrar o desenvolvimento e explicar as novas funcionalidades implementadas.

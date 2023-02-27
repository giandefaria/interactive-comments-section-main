<p align="center">
  <image
  src="https://img.shields.io/github/languages/count/giandefaria/rest-countries-api-with-color-theme-switcher-master"
  />
  <image
  src="https://img.shields.io/github/languages/top/giandefaria/rest-countries-api-with-color-theme-switcher-master"
  />
  <image
  src="https://img.shields.io/github/last-commit/giandefaria/rest-countries-api-with-color-theme-switcher-master"
  />
  <image
  src="https://img.shields.io/github/watchers/giandefaria/rest-countries-api-with-color-theme-switcher-master"
  />
</p>

# 📋 Índice do projeto


- [Proposta do projeto](#id01)
- [Desafios](#id02)
- [Arquivos do projeto](#id03)
- [Visual do projeto](#id04)
- [Feito com](#id05)
- [Procedimento de instalação](#id06)
- [Autor](#id07)

# Proposta do projeto <a name="id01"></a>

O layout do projeto é baseado nesse challenge do site Frontend Mentor: https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca

A proposta desse projeto consiste em montar uma página que possui uma lista de todos os países, contendo as informações de cada país, além de ser possível realizar a busca de um país por nome ou por região. Foi incrementado no projeto o modo noturno, um mapa que mostra a localização do país no mapa mundi, além de um ícone do wikipedia para ter mais informações sobre o país.


# Desafios <a name="id02"> </a>

Desafio foi criar uma página variável onde se alterasse apenas as informações do país que foi selecionado. Para isso, foi utilizado o react-router-dom e o hook useParams(), de modo que esse valor variável do link fosse capturado e feito uma requisição para a API retornar as informações daquele país, renderizando a página com os elementos HTML e mostrando do mapa a localização do país pela latitude e longitude informada pela API.

# Arquivos do projeto <a name="id03"> </a>

Os principais arquivos do projeto são: 
* diretório pages => localização do arquivo da página inicial (main) e de informação dos países (country-info)
* diretório components => estão localizadas metódos que serão utilizados no projeto: change-light-mode (para mudar tema da página);  crete-html-element-with-list (recebe a lista de países e monta no html); input-country-list (funções que montam a lista de países de acordo com o tipo de busca);
* diretório assets => contém as imagens utilizadas no projeto
* diretório interfaces => contem a interface utilizada no retorno da API, para habilitar o autocomplete e evitar que o desenvolvedor coloque informações que não são retornadas pela API.
* diretório styles => contém os estilos utilizados globalmente no projeto

# Visual do projeto <a name="id04"></a>

<p align="center">

* Design da página principal no desktop
<image
src="./assets/design/desktop-preview.jpg"
/>

</p>

<p align="center">

* Design da página principal no celular
<div align="center">
  <image
  src="./assets/design/mobile-design.jpg"
  />
</div>

</p>


# 🛠 Feito com <a name="id05"></a>

<br />

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [RestCountriesAPI](https://restcountries.com/)
- [Leaflet](https://leafletjs.com/examples/quick-start/)


<br />

# 📝 Procedimentos de instalação <a name="id06"></a>

<br />

Clone este repositório usando o comando:

```bash
git clone https://github.com/giandefaria/rest-countries-api-with-color-theme-switcher-master.git
```

Na pasta do projeto instale as dependências com uso do npm ou yarn

```bash
npm install
ou
yarn install
```

<br />

# Autor <a name="id07"></a>

<br />

- Frontend Mentor - [@giandefaria](https://www.frontendmentor.io/profile/giandefaria)
- Linkedim - [Gian de Faria](www.linkedin.com/in/gianfaria)
- GitHub - [giandefaria](https://github.com/giandefaria)


# Frontend Mentor - Interactive comments section

![Design preview for the Interactive comments section coding challenge](./assets/design/desktop-preview.jpg)

* Mobile preview

![Design preview in mobile](./assets/design/mobile-design.jpg)


## Welcome! 👋

Challenge from frontendmentor.io. https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9

**O objetivo é criar um projeto CRUD, baseado em uma seção de comentários interativa, com a possibilidade de responder, criar , editar e excluir comentários. O principal foco desse projeto é treinar as habilidades em JavaScript. Para o seu desenvolvimento, foi utilizado um objeto em JSON, onde constam a url da imagem dos avatares, os comentários, nome de usuários, dados esses que foram selecionados e imbutidos no HTML da página por meio do arquivo inputJsonData.js. Foi também utilizado o framework Bootstrap para o design do box dos comentários e réplicas.**

# Teconologias utilizadas
 * HTML
 * CSS
 * JS
 * Bootstrap
 * JSON

**Para executar esse projeto basta executar o arquivo index.html.**

**No arquivo 'tarefas.md' consta o passo a passo realizado para o desenvolvimento do projeto.**

 # Arquivo index.html
 * Arquivo para iniciar o projeto. Aqui consta a marcação dos elementos no html.

 # Arquivo style.css
 * Adicionei o visual da página no desktop e no mobile 

 # Arquivo script.js
  * Contém todas as funções JS responsáveis pela interação do usuário com a página. 

  
 # Arquivo inputJsonData.js
  * arquivo responsável por adicionas os dados contidos em dataJson.js no HTML da página
  
 # Arquivo dataJson.js
  * nesse arquivo se encontra o objeto em JSON. 
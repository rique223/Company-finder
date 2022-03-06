# Localizador de Empresas
## O que é o Localizador de Empresas?
O localizador de empresas é uma aplicação feita utilizando o framework do Facebook React.js, a Material UI library 
da Google e hospedado no Firebase. Basicamente, é realizada uma requisição RESTful(via axios) a partir do cnpj fornecido,
que recupera da api receitaws.com.br a razão social e o endereço da empresa consultada, esse endereço então é passado pela 
API de geocoding(o ato de transformar uma string de endereço em um par de coordenadas), também da Google, e disso é 
recuperado um par de coordenadas que então passa pela api de mapas da Google (gerenciada pelo package @react-google-maps/api)
e quando clica-se em um dos cartões renderizados com os dados da empresa uma página com um mapa é renderizada com o centro do mapa
no par de coordenadas recuperado e com um marcador do google maps no local exato dessas coordenadas além de um cartão com os dados
da empresa que está sendo mostrada.

## Tecnologias utilizadas no projeto
### React+Typescript
O Localizador de Empresas foi codificado usando a versão typescript do react e sendo assim foram utilizados arquivos de declaração
de tipo que são identificados pela extensão ``` .d.ts ``` e servem como um "guia" para que a linguagem TypeScript saiba com qual
tipo de arquivo customizado ela está lidando e assim facilite que o Lint descubra esses arquivos tornando o código mais organizado
e livre de importações desnecessárias.

### Material UI Library e Pre-processador Sass
A material ui library também foi utilizada nesse projeto, porém para conseguir atingir o resultado esperado e tornar o aplicativo
o mais fidedigno possível ao Style Guide foi utilizado o pre-processador de Css Sass o que torna os arquivos do tipo stylesheet muito
mais organizados, legiveis e oferece ferramentas poderosas na hora de estilizar os componentes em tela.

### React hooks e encriptação hexadecimal
Além disso, para tornar a função de armazenamento em local storage a mais robusta, completa e segura possível foi utilizado um método
de encriptação hexadecimal com react hooks nas strings que são armazenadas localmente no sistema do navegador para evitar que os 
dados armazenados sejam posteriormente roubados da máquina do usuário ou interceptados por terceiros. 

### React contexts
Também foi utilizado o sistema de contextos do React para disponibilizar dados vitais à todo o projeto e assim facilitar a comunicação
de dados entre os componentes do aplicativo o que torna a renderização e manuseio de dados muito mais fácil e prático.

### Axios+REST
O cliente de requisições HTTP axios foi utilizado como alternativa à biblioteca padrão do Javascript Fetch já que ele é mais prático
e robusto no que tange a realização e manuseio de requisições RESTful.

### Firebase Hosting
Para a hospedagem do projeto foi utilizado o sistema de hosting da Firebase o que tornou prático e rápido a configuração e deploy
do projeto em uma plataforma pública web.
Link de acesso ao projeto Hosteado: https://localizador-de-empresas-cc822.web.app/home

## Estrutura de pastas do Localizador de Empresas
+ Conexa-Labs
  - .firebase-Cache de hosting do firebase
  - public-Pasta que guarda a versão de produção do projeto
  - src-Source code do projeto
    * @types-Arquivos de declaração de tipo
    * components-Componentes React
    * contexts-Contextos React
    * hooks-Hooks React
    * pages-Páginas do projeto
    * utils-Funções lógicas utilizadas no projeto
    * _variables.scss-Pasta exclusiva para variáveis .scss
    * 404.html
    * App.tsx
    * App.test.tsx
    * index.html
    * index.scss
    * index.tsx
    * react-app-env.d.ts
    * serviceWorker.ts
    * setupTests.ts
  - .firebaserc-Arquivo de configuração do firebase
  - .gitignore-Arquivo de configuração das extensões não-comitaveis do gi
  - asset-manifest.json-Arquivo de preenchimento automático com os recursos necessários para o funcionamento da versão web do projeto
  - firebase.json-Arquivo de configuração do firebase
  - package.json-Lista de packages utilizadas no projeto
  - packag-lock.json-Arquivo de configuração dos packages
  - tsconfig.json-Arquivo de configuração do TypeScript
  - yarn.lock
  - yarn-error.log

## Como executar o projeto?
1. Clone ou baixe esse repositório
2. Abra seu CLI favorito
3. Execute o comando ``` yarn ``` ou ``` npm i ```(yarn é mais rápido ;) )
4. Execute o comando ``` yarn start ```

# [EN]
## What is the company finder?
The company finder was developed for the front-end interview process of the Conexa Hub company. It receives an CNPJ(National Register of Legal Entities) and with that makes various requests to the receitaws.com.br API which returns a miriad of informations about that specific company, it also geocodes(with the google geocoding API) the company address so that its location can be rendered in a google maps API map.

## Tecnologies used in the project
### React+Typescript
The Company Finder was coded using the typescript version of react and thus type declaration files were used which are identified by the .d.ts extension and serve as a "guide" for the TypeScript language to know which type of custom file it is handling and thus make it easier for Lint to discover these files by making the code more organized and free from unnecessary imports.

### Material UI Library and Sass Preprocessor
The ui library material was also used in this project, but to achieve the expected result and make the application as trustworthy as possible to the Style Guide, the CSS Sass pre-processor was used, which makes stylesheet files much more organized, readable and offers powerful tools when styling on-screen components.

### React hooks and hexadecimal encryption
Furthermore, to make the local storage function as robust, complete, and secure as possible, a hexadecimal encryption method was used with react hooks on the strings that are stored locally in the browser system to prevent the stored data from being later stolen from the user's machine or intercepted by a third party.

### React contexts
React's context system was also used to make vital data available to the entire project and thus facilitate data communication between the application's components, which makes rendering and handling data much easier and more practical.

### Axios+REST
The Axios HTTP request client was used as an alternative to the standard Javascript Fetch library as it is more practical and robust when it comes to performing and handling RESTful requests.

### Firebase Hosting
The Firebase hosting system was used to host the project, which made it practical and quick to configure and deploy the project on a public web platform. Link to access the Hosteado project: https://localizador-de-empresas-cc822.web.app/home

## How to run the project
1. Clone or Download this repository;
2. Open your favorite CLI
3. Execute the command ``` yarn ``` or ``` npm i ``` ( yarn is faster ;) )
4. Execute the command ``` yarn start ``` or ``` npm start ```

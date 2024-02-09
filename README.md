## What is the company finder?
The company finder is an application made using the React.js framework, the Material UI library, the open-source spring boot micro-framework, and the Firebase hosting system. The app works as follows, a request is made, via jsonp, using the provided cnpj(National register for juridic people) to the API receitaws.com.br that returns the corporate name, address and, cnpj of the company to which the provided cnpj belongs. The aforementioned address is then sent to a [reverse-proxy written in spring boot, with kotlin](https://github.com/rique223/back-end-company-finder), which in turn makes a call to the geocoding(the act of transforming an address string into a pair of coordinates) google API and retrieves a pair of coordinates which, after clicking on one of the rendered cards, is sent to the maps API, also from Google, (managed by the package @react-google-maps/api) and a page with a map is rendered with the center of the map set in the retrieved coordinate pair and with a google maps marker at the exact location of those coordinates plus a card, in the upper left corner, with the data of the company whose location is being shown. 

## Tecnologies used in the project
### React+Typescript
The company finder uses React.js with Typescript. Therefore, it uses type declaration files, identified by the ``` .d.ts ``` file extension, and serves as a "guide" for Typescript to know what kind of custom data it is dealing with and thus allowing bugs to be identified before the application is sent to production in addition to making it easier to work with this data. 

### Material UI Library and Sass Preprocessor
The company finder uses the material ui library in this project. But, to achieve the expected result and make the application as true as possible to the Style Guide, the CSS Sass pre-processor was used, which makes the stylesheet files way more organized, readable, and offers powerful styling and organization of the CSS code. 

### Custom react hooks and encryption
In addition, the company finder uses a hexadecimal encryption method in the strings that are stored locally, made with custom react hooks, to make the local storage function more robust and secure, in the browser's local storage system, to prevent the stored data can be easily accessed through the browser's dev tools, thus preventing possible leaks of sensitive data. 

### React contexts
React's context system was also used to make vital data available to the entire project and thus facilitate data communication between the application's components, which makes rendering and handling data much easier and more practical.

### Axios+REST+JSONP
The Axios HTTP request client was used as an alternative to the standard Javascript Fetch library since it was, at the time of creating this project, more practical and robust in terms of performing and handling RESTful requests. In addition, the method of sending data in JSON format, JSONP, was used to avoid CORS problems when sending requests to the API receitaws.com.br. 

### Spring boot+Kotlin
The open-source micro-framework, Spring boot, which serves as a facilitator for creating applications in the Java ecosystem, was used to create a reverse-proxy, written in kotlin, for the google geocoding API to solve CORS problems, since this API does not allow the use of JSONP, and to store the secrets necessary to make requests in this API more securely through environment variables. This back-end receives the address retrieved from the API recipews.com.br through a GET request from Axios, makes another GET request to the Google geocoding API, and returns the data to the front-end, using the compact cross-origin configurators that spring boot provides. 

### Firebase Hosting and Heroku
For hosting the front-end of this project, the Firebase hosting system was used, which made it practical and fast to configure and deploy the project on a public web platform. 
Hosted front-end access link: https://localizador-de-empresas-cc822.web.app/home   
In addition, for hosting the aforementioned reverse-proxy, Heroku's spring boot application deployment system was used, which made deploying and using this back-end on a public web platform practical and fast.  
Hosted backend access link: https://back-end-company-finder.herokuapp.com  

## How to run the project
1. Clone or Download this repository;
2. Open your favorite CLI
3. Execute the command ``` yarn ``` or ``` npm i ``` ( yarn is faster ;) )
4. Execute the command ``` yarn start ``` or ``` npm start ``` (If you choose npm in the last step)

#[PT]
# Localizador de Empresas
## O que é o Localizador de Empresas?
O localizador de empresas é uma aplicação feita utilizando o framework React.js, a Material UI library, o micro framework open-source spring boot e o sistema de hosting do Firebase. É realizada uma requisição, via jsonp, a partir do cnpj fornecido, para a api receitaws.com.br que retorna a razão social, o endereço e o cnpj da empresa a qual pertence o cnpj fornecido. O endereço citado anteriormente então é enviado para um [proxy-reverso escrito em spring boot, com kotlin](https://github.com/rique223/back-end-company-finder), que por sua vez faz uma chamada à API de geocoding(o ato de transformar uma string de endereço em um par de coordenadas) da google e recupera um par de coordenadas que, quando clica-se em um dos cartões renderizados com os dados da empresa, é enviado para a api de mapas, também da Google, (gerenciada pelo package @react-google-maps/api) e uma página com um mapa é renderizada com o centro do mapa no par de coordenadas recuperado e com um marcador do google maps no local exato dessas coordenadas além de um cartão, no canto superior esquerdo, com os dados da empresa cuja localização está sendo mostrada.

## Tecnologias utilizadas no projeto
### React+Typescript
O Localizador de Empresas foi codificado usando react com typescript como linguagem e, sendo assim, foram utilizados arquivos de declaração de tipo que são identificados pela extensão ``` .d.ts ``` e servem como um "guia" para que a linguagem TypeScript saiba com qual tipo de dados customizado ela está lidando e assim permita que bugs sejam identificados antes que a aplicação seja enviada para produção além  de facilitar o trabalho com esses dados.

### Material UI Library e Pre-processador Sass
A material ui library também foi utilizada nesse projeto, porém para conseguir atingir o resultado esperado e tornar o aplicativo o mais fidedigno possível ao Style Guide foi utilizado o pre-processador de Css Sass o que torna os arquivos do tipo stylesheet muito mais organizados, legiveis e oferece funcionalidades poderosas de estilização e organização de código css.

### React hooks customizados e criptografia
Além disso, para tornar a função de armazenamento em local storage mais robusta e segura foi utilizado um método de encriptação hexadecimal, por meio de react hooks customizados, nas strings que são armazenadas localmente, no sistema de local storage do navegador, para evitar que os  dados armazenados sejam facilmente acessados por meio das dev tools do navegador, assim evitando possíveis vazamentos de dados sensíveis. 

### React contexts
Também foi utilizado o sistema de contextos do React para disponibilizar dados vitais de forma global aos componentes do projeto e assim facilitar a comunicação entre componentes, o que torna a gerência de dados muito mais fácil e prática.

### Axios+REST+JSONP
O cliente de requisições HTTP axios foi utilizado como alternativa à biblioteca padrão do Javascript Fetch já que ele era, no momento da criação desse projeto, mais prático e robusto no que tange a realização e manuseio de requisições RESTful. Além disso, o método de envio de dados em formato json, JSONP, foi utilizado para evitar problemas de CORS ao enviar requisições para a API receitaws.com.br.

### Spring Boot+Kotlin
O micro framework open-source Spring boot, que serve como um facilitador para criação de aplicações no ecossistema Java, foi utilizado para criar um proxy-reverso, escrito em kotlin, para a API de geocoding do google para resolver problemas de CORS, já que essa API não permite o uso de JSONP, e guardar os segredos necessários para realizar requisições nessa API de forma mais segura por meio de variáveis de ambiente. Esse back-end, basicamente, recebe o endereço recuperado da API receitaws.com.br por meio de uma requisição de GET do axios, faz outra requisiçào de GET para a API de geocoding do google e devolve os dados para o front-end, utilizando-se das configuradores compactas de cross-origin que o spring boot disponibiliza.

### Firebase Hosting e Heroku
Para a hospedagem do front-end desse projeto foi utilizado o sistema de hosting da Firebase o que tornou prático e rápido a configuração e deploy do projeto em uma plataforma pública web.  
Link de acesso ao front-end hospedado: https://localizador-de-empresas-cc822.web.app/home  
Além disso, para a hospedagem do proxy-reverso citado anteriormente, foi utilizado o sistema de deployment de aplicações spring boot da Heroku o que tornou prático e rápido o deploy e uso desse back-end em uma plataforma web pública.  
Link de acesso ao back-end hospedado: https://back-end-company-finder.herokuapp.com  

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
4. Execute o comando ``` yarn start ``` ou ```npm run start```, caso tenha utilizado npm no passo anterior

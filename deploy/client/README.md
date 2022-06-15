<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/apfdamascena/pta-boilerplate">
    <img src="../../assets/logoCITi.png" alt="Logo" width="180px">
  </a>

  <h3 align="center">PTA</h3>

  <p align="center">
  Esse boilerplate foi criado durante o processo seletivo de 2022 do CITi e ele tem o intuito de aproximar as pessoas aspirantes à realidade
  dentro do CITi. O boilerplate será usado durante a última etapa do processo seletivo, a qual tem o objetivo de capacitar tecnincamente as pessoas que entrarão no CITi.
    <br />
    <a href="https://github.com/apfdamascena/pta-boilerplate"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/apfdamascena/pta-boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/apfdamascena/pta-boilerplate/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Tabela de Conteúdo</h2></summary>
  <ol>
    <li><a href="#about-boilerplate">About Boilerplate</a></li>
    <li><a href="#deploy-client">Deploy Client</a></li></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<br/> 

## About Boilerplate
<br/>

  Esse boilerplate foi criado durante o processo seletivo de 2022 do CITi e ele tem o intuito de aproximar as pessoas aspirantes à realidade
  dentro do CITi. O boilerplate será usado durante a última etapa do processo seletivo, a qual tem o objetivo de capacitar tecnincamente as pessoas que entrarão no CITi.
  O template foi criado em um monorepo e está estruturado em cliente e servidor.

<p align= "center">
    <img src = "../../assets/client-server.png" width="85%" margin-top="20px"/>
</p>

O server tem uma estrutura base de código para a construção de uma API. Já o cliente, contém uma outra estrutura base de código para a construção de todo o frontend da aplicação. 
Ainda no server, tem uma abstração construída para facilitar o contato de pessoas aspirantes com a construção de uma API.


<br/> 

## Deploy Client

<br/>

0. Faça o deploy do server.
1. Entre na pasta /client do projeto.
2. Rode o seguinte comando:

    ```sh
   yarn build
   ```
3. Uma pasta build será criada. Copie o conteúdo dela.
4. Entre na pasta /server do projeto.
5. Entre em src/public da pasta /server e cole os arquivos copiados anteriormente.
6. Faça redeploy do server. Na pasta /server escreva:

    ```sh
   yarn build
   ```

    ```sh
   git add .
   ```

    ```sh
   git commit -am 'client deploy'
   ```

    ```sh
    git push heroku main
   ```

## Contact

<br/>

- Alex Damsacena - apfd@cin.ufpe.br
# Projeto de automação de QAXperience Bootcamp [Avançado em Cypress]

Esse projeto é a criação da automação em cypress.<br/>
Usando a Aplicação Shave-Xp desenvolvida para o curso. </br>
Utilizando a estrutura do projeto como PageObject (PO).</br>
*Obs.:* Foi incluso no projeto o desenvolvimento Back e Front do mesmo. 

## Componentes necessários para executar o projeto

- Nodejs (Versão *18.15.0*)
- yarn
- cypress (verão *12.7.0*)

## Informações para execução do Projeto

*Clonar o projeto*
```
$ git clone https://github.com/edcruz29/shaveXpTestCypress.git
```

### Informações baixar as dependencias do Projeto e executa-lo

*_1º Passo - Baixar as dependencias da Aplicação Qtruck_* <br/>
  1.1. Em um terminal baixar as dependencias de backend <br/>
     Na pasta de backend no terminal, informe o comando <br/>
     ```
    $ yarn install -D
    ```    <br/>
  1.2. Em um terminal baixar as dependencias de Frontend <br/>
     Na pasta de Frontend no terminal, informe o comando <br/>
     ```
    $ yarn install -D
    ```    <br/>
  1.3. Em um terminal baixar as dependencias de Test <br/>
     Na pasta de Test no terminal, informe o comando <br/>
     ```
    $ yarn install -D
    ```    <br/>
*_2º Passo - Start as Aplicações Shave-XP_* <br/>
  2.1. No mesmo terminal que baixou as dependencias deo Backend <br/>
     Na pasta shave-xp/api, informe o comando <br/>
     ```
    $ yarn dev
    ```  <br/>  
  2.2. No mesmo terminal que baixou as dependencias deo Frontend <br/>
     Na pasta shave-xp/web, informe o comando <br/>
     ```
    $ yarn dev
    ```  <br/>      

*_3º Passo - Após start o Frontend irá carregar a página do Qtruck_* <br/>
  ![image](https://user-images.githubusercontent.com/68963421/226124252-6feed30f-119e-476a-86fb-c1744decd8c5.png)<br/>

*_4º Passo - Após o start da Aplicação Qtruck executar os testes em Cypress_* <br/>
  4.1. No mesmo terminal que baixou as dependencias de Test <br/>
     Na pasta projects/shave-xp-cypress, informe o comando <br/>
     ```
    $ npx cypress open
    ```  <br/>

*_5º Passo - Após start o cypress aparecerá a tela de Boas vindas do Cypress_* <br/>
  45.1. Deve escolher a opção do E2E Testing conforme imagem abaixo: <br/>

 ![image](https://user-images.githubusercontent.com/32333336/184724714-85d58d7a-9a17-461b-833d-f95c34f57e49.png)
<br/>
  45.2. e peça para executar *_Running Chrome_* <br/>

*_6º Passo - irá carregar a tela para escolher qual navegador irá executar a automção_* <br/>
  6.1. Deve escolher qual navegador irá usar para a execução dos testes <br/>

  ![image](https://user-images.githubusercontent.com/32333336/184724758-60bdeb40-a088-4376-a77f-1c331961a2a6.png)
<br/>
  6.2. e peça para executar *_Start E2E Testing in Electron_*  <br/>

*_7º Passo - irá carregar a inicialização da automação_* <br/>
  7.1. Deve escolher qual arquivo deve ser inicializado <br/>

  ![image](https://user-images.githubusercontent.com/32333336/184724794-51903da2-b8c5-43e4-99ca-20986cb9af2e.png)
<br/>
  7.2. Peça para executar *_login.cy.js_* <br/>
  7.3  onde irá carregar os cenários de login que foram criados.  <br/>



*Em manutenção*

*Autor:* EdCruz <br/>
*Curso:* QAXpercience Bootcamp [Avançado em Cypress]![shave]

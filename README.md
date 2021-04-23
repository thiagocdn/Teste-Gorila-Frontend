# Sobre a aplicação

+ Essa aplicação é uma aplicação RESPONSIVA para Mobile e Desktop e foi desenvolvida em NextJS para consumir os dados da aplicação desenvolvida para o enunciado:

https://www.notion.so/Teste-para-desenvolvedor-back-end-pleno-fd5b6e07475e4af3bc99342c15bb3edc

+ A aplicação desenvolvida para o enunciado se encontra no seguinte repositório:

https://github.com/thiagocdn/Teste-Gorila-Backend

Referencie-se à esta caso queira rodar tudo em sua máquina local.

## Deploy e Disponibilidade

Essa aplicação está disponível na seguinte URL:

ATENÇÃO! O backend no Heroku tem o coldstart... A primeira requisição pode demorar um pouco para ser respondida, após isso ele rodará normalmente

https://gorila-frontend.vercel.app/


## Instalação Local

- Para rodar em sua máquina, clone o repositório através do terminal:
```
git clone https://github.com/thiagocdn/Teste-Gorila-Frontend.git
```

- Entre na pasta onde o repositório foi clonado e instale as dependências:

#### Yarn
```
yarn
```
ou
```
yarn install
```

#### NPM
```
npm i
```
ou
```
npm install
```

- Para rodar a aplicação simplesmente execute no terminal, na pasta onde esta configurado o repositorio:

#### Yarn
```
yarn dev
```
#### NPM
```
npm run dev
```

A aplicação deve rodar em http://localhost:3000/ que é a porta padrão do NextJS

## Detalhes da Aplicação

+ Essa aplicação foi desenvolvida para consumir a API de cálculo de investimento pós-fixado atrelado à taxa CDI.

### Rodando no Desktop

+ Ao abrir a aplicação, você se deparará com a tela de input de dados:

![image](https://user-images.githubusercontent.com/61380775/115795379-33916f80-a3a6-11eb-8e03-907379749af8.png)

+ Preencha-os conforme sua necessidade/vontade e clique em adicionar.... a aplicação irá solicitar os dados ao backend e ao terminar, irá inserir os dados na lista ao final da página:

![image](https://user-images.githubusercontent.com/61380775/115796307-004fe000-a3a8-11eb-8c87-865ffbd3d547.png)

+ Você pode adicionar mais dados que eles serão adicionados na lista:

![image](https://user-images.githubusercontent.com/61380775/115796374-29707080-a3a8-11eb-90cf-be78ee1d2cdb.png)

+ Para excluir algum investimento, apenas clique no "X" vermelho.

+ Agora, para visualizar o grafico de evolução, clique em "Conferir" e um modal com o gráfico será aberto:

![image](https://user-images.githubusercontent.com/61380775/115796587-75231a00-a3a8-11eb-81dd-203fc481c833.png)

Você pode verificar os dados de cada ponto passando o mouse por cima do ponto desejado; uma quantidade de pontos são selecionadas para ficar mais apresentável.
Para fechar o modal, simplesmente clique no botão "Fechar".


### Rodando no Mobile

+ Temos as mesmas funcionalidades apresentadas na versão Desktop para o Mobile, porém adaptada para uma melhor visualização:

+ Input de dados:

![image](https://user-images.githubusercontent.com/61380775/115796863-f67aac80-a3a8-11eb-95bb-fef1acd35aee.png)

+ Dados adicionados e botão para excluir alguma entrada:

![image](https://user-images.githubusercontent.com/61380775/115796781-cfbc7600-a3a8-11eb-8eff-7a785f56e188.png)

+ Grafico apresentado na tela pelo modal:

![image](https://user-images.githubusercontent.com/61380775/115796833-e82c9080-a3a8-11eb-9f77-2e8b7cd7c4fe.png)

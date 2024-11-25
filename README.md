# Aplicação BackEnd Instabytes

Aplicação backend desenvolvida com Node JS, MongoDB - Atlas e Google Cloud no curso da plataforma Alura.


## Objetivos

O curso tinha o objetivo de criar uma aplicação web servidor que mantivesse arquitetura MVC e possibilitasse o acesso a EndPoints para o cadastro de Posts e upload de imagens para uma Rede Social. 

## Implementação

O projeto foi implementado usando JavaScript e utilizando como banco de dados o MongoDB, hospedado na plataforma Atlas.

## Deploy

Foi realizado o deploy da aplicação na Google cloud e esta disponível no Link ao lado [Link aplicação](https://instabytes-alura-128432218858.southamerica-east1.run.app/)

Para utilizar as rotas, se atente na sessão de EndPoints deste documento.

## Instalação do Projeto

Para utilizar o projeto basta clonar o repositório com o comando: 

```bash
git clone https://github.com/lucasantonelli21/instabytes-alura
```

Daqui pra frente, é necessário que tenha o node instalado na sua máquina.

Utilize o comando abaixo para instalar as dependências do projeto: 

```bash
npm i
```

Após isso, crie um arquivo .env no root do projeto.

No arquivo .env coloque sua Connection String com o Atlas e sua API Key do Gemini como na imagem abaixo:

![image](https://github.com/user-attachments/assets/2929983f-a642-443d-b6c2-d0a63d983bda)

[Link para o Atlas](https://atlasedu.com.br/)

[Link para o GeminiAPI](https://aistudio.google.com/app/apikey?utm_source=website&utm_medium=referral&utm_campaign=Alura-dev-backend-immersion&utm_content=)

Agora execute a aplicação com o comando abaixo: 
```bash
npm run dev
```

O servidor deverá imprimir no console a seguinte mensagem:

![image](https://github.com/user-attachments/assets/ad7da070-1fff-49cb-837c-4238e9324cb0)

Após isso você estará pronto para fazer suas requisições através da url http://localhost.com/3000/


## EndPoints

A aplicação conta com duas rotas.


### /posts

Nessa rota, poderá ser feito requisições GET e POST.

#### GET

Para requisições GET não é necessário enviar nenhum body, e será retornado todos os posts no banco de dados.

#### POST

Para a requisição POST, deve ser mandado a Descrição do post, o url da imagem e o alt da imagem, como na figura abaixo: 

![image](https://github.com/user-attachments/assets/20aca648-fe2d-4198-a7eb-5c3482c649ee)

### /upload

Nessa rota, poderá ser feito requisições POST e PUT.

#### POST

Para requisições POST, deverá ser passado uma imagem com anexo no body da requisição.

Será retornado o id daquele novo POST.

#### PUT

Para a requisição PUT, deverá ser passado na URL o id do post que deseja atualizar (retornado na requsição POST).

Aqui deverá ser passado apenas o alt da imagem, já que teremos o endereço da imagem enviada anteriormente no banco, e a descrição da mesma será gerada automaticamente pela IA do Gemini.

Exemplo do Body: 

![image](https://github.com/user-attachments/assets/71876764-cc05-4805-86d9-f91f0805b71f)

## Sugestões Futuras

Para facilitar o uso da aplicação, seria interessante que ao usarmos a rota POST do /posts fosse enviado junto com o body a imagem desejada e que sua descrição já fosse gerada automaticamente com o Gemini.

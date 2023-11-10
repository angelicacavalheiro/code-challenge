# Documentação do Projeto

## Introdução

Este projeto utiliza Vite como seu bundler, db-json como um banco de dados JSON para armazenamento de dados e inclui testes unitários para garantir a robustez do código. Este documento fornecerá uma visão geral do projeto, instruções de instalação, detalhes sobre o banco de dados, uma visão geral do código-fonte e informações sobre como executar os testes unitários.

## Instalação

Antes de começar, certifique-se de ter o Node.js instalado na sua máquina. Siga estas etapas para instalar e configurar o projeto:

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/code-challenge-app.git
cd code-challenge-app
```
2. Instale as dependências 

```bash
npm install
```

## Banco de Dados

Este projeto utiliza o db-json como um banco de dados JSON simples para armazenar dados. 

## Execução do Back-end

Antes de iniciar o front-end, é necessário executar o servidor back-end para garantir que os dados estejam disponíveis. Utilize o seguinte comando:

```bash
json-server db.json
```

## Desenvolvimento Front-end

Para iniciar o ambiente de desenvolvimento do front-end, utilize o seguinte comando:


```bash
npm run dev
```
Isso iniciará o servidor de desenvolvimento e você poderá acessar o aplicativo em http://localhost:3000.

Nota: Após iniciar o servidor, se o nanegador não abrir automaticamente, digite o atalho 'o' no terminal.

## Testes unitários 

Este projeto inclui testes unitários. Execute os testes com o seguinte comando:

```bash
npm run test
```

## Resultado

<img src="/public/code-challenge.gif" />

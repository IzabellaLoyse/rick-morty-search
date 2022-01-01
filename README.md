# Rick and Morty Search

## 💡 Guia de instalação

## 📌 Pré-requesitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)

## ⚙️ Instalação

Clone o projeto e acesse a sua pasta

```
# Clone o repositório
$ git clone <projeto>

# Acesse a pasta do projeto no terminal
$ cd pasta
```

Verifique se a instalação do Node.js foi executada corretamente:

```
# Verifica a versão atual do Node.js instalada
$ node -v

# Verifica a versão atual do NPM instalada
$ npm -v
```

Logo após a instalação do Node.js, precisaremos instalar a bliblioteca sass
que irá compilar os arquivos .scss do projeto

- [sass](https://www.npmjs.com/package/sass)

```
# Instala globalmente o sass
$ npm install -g sass
```

## 🔮 Instalação das Dependências

- Para instalar as dependências necessárias do projeto 

Usando npm:

```
npm install
```

Usando Yarn:
```
yarn install
```

## 📌 Rodando o Projeto

Usando npm:
```
npm dev
```

Usando Yarn:
```
yarn dev
```

## 🔮 Compilando o CSS do projeto

Após a instalação da biblioteca, iremos compilar o arquivo (.scss/.sass) para que seja gerado o arquivo .css do projeto

```
# Gera o CSS do projeto a partir do arquivo .scss
$ sass <input> [output]

# Exemplo
$ sass src/style.scss dist/style.css
```

Caso deseja que as alterações feitas nos arquivos .scss sejam compiladas após as modificações.
Devemos seguir o comando `$sass --watch` como mostrado no exemplo

```
# Assiste as alterações em um arquivo ou diretório
$ sass --watch src/sass:dist/css
```
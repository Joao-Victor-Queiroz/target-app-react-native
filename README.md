# 🎯 Target: Financial Goal Tracker

![React Native](https://img.shields.io/badge/React%20Native-000000?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

Sua meta financeira na palma da sua mão. Alcance seus objetivos, transação por transação.

---

## 📸 Visão Geral do App

## 🚀 Sobre o Projeto

**Target** é um aplicativo móvel focado em ajudar usuários a atingir suas metas financeiras. Cansado de começar um objetivo e perder o controle no meio do caminho? Com o Target, você cadastra sua meta (ex: "Viagem dos Sonhos", "Comprar um notebook") e registra todas as entradas e saídas de dinheiro relacionadas a ela.

O app oferece uma visão clara de quanto falta para alcançar seu sonho, mantendo tudo armazenado localmente no seu dispositivo para maior privacidade e performance, sem depender de conexão com a internet.

Este projeto foi desenvolvido como parte do **Módulo 2 de React Native** da trilha **React Native** da [Rocketseat](https://www.rocketseat.com.br/).

## ✨ Funcionalidades

* **Criação de Metas:** Defina um nome e o valor total do seu objetivo financeiro.
* **Registro de Transações:** Adicione entradas (depósitos) e saídas (gastos) vinculadas a cada meta.
* **Visualização de Progresso:** Acompanhe facilmente o quanto você já economizou e o quanto ainda falta (em valor e porcentagem).
* **Persistência Local:** Seus dados não se perdem! Tudo é salvo com segurança no seu dispositivo.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes ferramentas:

* **[React Native](https://reactnative.dev/)**: O framework principal para a construção da interface nativa.
* **[Expo (Development Build)](https://expo.dev/)**: Utilizado para gerenciar o projeto e criar uma build de desenvolvimento customizada. Isso foi necessário para incluir módulos nativos.
* **[TypeScript](https://www.typescriptlang.org/)**: Para um código mais seguro, legível e manutenível.
* **[Expo-SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)**: Para a criação e gerenciamento do banco de dados local (SQLite) no dispositivo.

## 🏁 Como Executar o Projeto

Este projeto **não funciona com o Expo Go**, pois utiliza um banco de dados nativo (SQLite). Você precisará compilar o app nativo.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en/) (LTS)
* [Git](https://git-scm.com/)
* Um dispositivo/emulador Android ou iOS.

---

### Opção 1: Rodando Localmente (Recomendado para Devs)

Esta é a forma mais rápida se você já tem o **Android Studio** e o ambiente de desenvolvimento Android configurado na sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Joao-Victor-Queiroz/target-app-react-native](https://github.com/Joao-Victor-Queiroz/target-app-react-native)
    cd target
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o projeto:**
    
    (Certifique-se de que seu emulador Android está aberto ou um dispositivo físico está conectado via USB)
    
    ```bash
    npx expo run:android
    ```
    
    Este comando irá compilar o aplicativo, instalá-lo no seu dispositivo/emulador e iniciar o servidor de desenvolvimento (Metro) automaticamente.

---

### Opção 2: Gerando a Build com EAS (Para Testar)

Use esta opção se você **não tem** o ambiente nativo (Android Studio) configurado ou quer gerar um arquivo `.apk` para instalar em qualquer dispositivo.

1.  **Clone o repositório e instale as dependências:**
    ```bash
    git clone [https://github.com/seu-usuario/target.git](https://github.com/seu-usuario/target.git)
    cd target
    npm install
    ```

2.  **Instale e faça login no EAS CLI:**
    ```bash
    npm install -g eas-cli
    eas login
    ```

3.  **Configure o projeto (se for a primeira vez):**
    ```bash
    eas build:configure
    ```

4.  **Crie a build de desenvolvimento (Exemplo para Android):**
    
    * Para um emulador:
        ```bash
        eas build --profile development --platform android
        ```
    * Para um dispositivo físico (gere o APK e instale manualmente):
        ```bash
        eas build --profile development-apk --platform android
        ```
    *(Nota: Você pode precisar configurar o perfil `development-apk` no seu arquivo `eas.json`)*

5.  **Baixe e instale o app (.apk) no seu dispositivo/emulador.**

6.  **Inicie o servidor de desenvolvimento:**
    
    Com a build (o app "Target") instalada e aberta no seu dispositivo, rode o comando a seguir no seu terminal:
    
    ```bash
    npx expo start --dev-client
    ```

7.  Escaneie o QR code (ou selecione o *bundle* que aparecer) dentro do app Target e o aplicativo será carregado!



---

Feito com ❤️ por [João Victor Queiroz](https://github.com/Joao-Victor-Queiroz)

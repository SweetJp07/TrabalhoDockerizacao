# Trabalho Docker 
Aluno: João Pedro Mendes Pereira - Matrícula: 2412970
Este é o meu trabalho de dockerização.

Aqui tem o código de uma aplicação completa com:
* Frontend (o site)
* Backend (a API)
* Banco de Dados (PostgreSQL)

Toda a aplicação está rodando via Docker Compose!

---

## O que precisa ter instalado?

Antes de começar, você só precisa ter duas coisas instaladas no seu PC (seja ele Windows ou Linux):

* **Git** (para conseguir baixar o projeto)
* **Docker Desktop** (que já vem com o Docker e o Docker Compose)

---

## Passo a Passo para Rodar o Projeto

**1. Baixar (clonar) o projeto do GitHub:**

```bash
git clone [https://github.com/SweetJp07/TrabalhoDockerizacao.git](https://github.com/SweetJp07/TrabalhoDockerizacao.git)
```

**2. Entrar na pasta que foi criada:**

```bash
cd TrabalhoDockerizacao
```

**3. Ligar tudo com o Docker Compose:**

O comando docker-compose sobe o site, a API e o banco de dados. O `-d` faz ele rodar no fundo pra não travar o terminal e o `--build` garante que ele use a versão mais nova do código.

```bash
docker-compose up -d --build
```

Pronto! É só esperar um pouco e a aplicação vai estar rodando.

---

## Onde acessar?

Depois que os containers subirem, você pode acessar a aplicação aqui:

* **🌐 Site (Frontend):** [http://localhost:5173](http://localhost:5173)
* **⚙️ API (Backend):** [http://localhost:3001](http://localhost:3001)

## Como desligar tudo

Quando terminar de usar, rode este comando para parar e remover os containers. Isso libera as portas e os recursos do seu computador.

```bash
docker-compose down
```

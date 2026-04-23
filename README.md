# 🚀 Node.js Continuous Delivery: AWS & Docker Pipeline

<p align="center">
  <img src="https://img.shields.io/github/workflow/status/SEU_USUARIO/SEU_REPOSITORIO/deploy.yml?branch=main&style=for-the-badge&logo=github-actions&logoColor=white&label=Pipeline" />
  <img src="https://img.shields.io/badge/AWS-ECR%20%26%20App%20Runner-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

## 📌 Visão Geral
Este repositório não é apenas uma API, é a demonstração de um **ecossistema automatizado**. O foco aqui foi eliminar o "na minha máquina funciona", criando um fluxo onde cada linha de código é validada e distribuída na nuvem sem intervenção manual.

---

## 🏗️ A Engenharia do Fluxo (CI/CD)

O pipeline foi estruturado sobre três pilares fundamentais da cultura DevOps:

### 1. Integridade (CI)
* **Trigger:** Push na branch `main`.
* **Gatekeeper:** Execução automática de testes unitários. Falhas interrompem o processo antes mesmo de gerar custos de build.

### 2. Imutabilidade (Docker)
* **Tagging Estratégico:** Utilizamos o `SHA` do commit para taguear as imagens no **AWS ECR**.
* **Por que?** Isso garante rastreabilidade total. Se um erro ocorrer em produção, sabemos exatamente qual versão do código está rodando e podemos fazer um rollback instantâneo.

### 3. Segurança (IAM)
* **Zero Leak Policy:** Nenhuma credencial é exposta. O login na AWS é feito via **GitHub Secrets** e autenticação temporária através das Actions oficiais.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Runtime** | Node.js 18.x (LTS) |
| **Framework** | Express |
| **Container** | Docker (Multi-stage build para imagens leves) |
| **Pipeline** | GitHub Actions |
| **Cloud** | AWS (ECR + App Runner) |

---

## 🚀 Como Replicar este Laboratório

### 1️⃣ Preparação do Ambiente
* Certifique-se de ter o **Docker** instalado.
* Configure um usuário IAM na AWS com permissões de escrita no **ECR**.

### 2️⃣ Configuração de Chaves (Secrets)
Para o pipeline ganhar vida, configure no seu GitHub (`Settings > Secrets`):

* `AWS_ACCESS_KEY_ID`: Seu identificador de acesso.
* `AWS_SECRET_ACCESS_KEY`: Sua chave secreta.
* `AWS_REGION`: Ex: `us-east-1`.

### 3️⃣ Execução Local
```bash
# Clone o projeto
git clone [https://github.com/SEU_USUARIO/REPOSITORIO.git](https://github.com/SEU_USUARIO/REPOSITORIO.git)

# Build e Run via Docker
docker build -t node-api-cicd .
docker run -p 3000:3000 node-api-cicd

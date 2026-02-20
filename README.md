# 🌊 Tábua de Maré — Praias de Pernambuco

> Previsão oficial de marés para o litoral pernambucano, com dados extraídos diretamente da Tábua de Marés da **Marinha do Brasil (DHN) — 2026**.

---

## 📌 Sobre o Projeto

Este aplicativo web foi desenvolvido para fornecer informações precisas sobre as marés das praias de Pernambuco de forma simples, visual e acessível. Diferente de outros apps que utilizam APIs externas ou cálculos aproximados, os dados aqui apresentados são **extraídos diretamente da publicação oficial da Diretoria de Hidrografia e Navegação (DHN) da Marinha do Brasil**, garantindo máxima fidelidade às previsões reais.

O app cobre todos os **365 dias de 2026** e 36 praias distribuídas ao longo do litoral norte e sul de Pernambuco, além de Fernando de Noronha.

---

## ✨ Funcionalidades

- 📅 **Consulta por data** — qualquer dia de 2026
- 🏖️ **36 praias** organizadas por litoral norte, sul e Recife
- 📈 **Gráfico interativo** da curva de maré do dia (interpolação cosseno)
- 🔵 **Nível atual em tempo real** com indicação de maré enchendo ou vazando
- ⏰ **Próxima preamar e baixa-mar** com horário e altura
- 📋 **Tabela completa** de altas e baixas-mares do dia
- 🌕 **Fase da lua** correspondente à data selecionada
- 📐 **Amplitude da maré** calculada automaticamente

---

## 🗺️ Praias Disponíveis

| Região | Praias |
|---|---|
| 📍 **Recife** | Boa Viagem, Pina, Brasília Teimosa |
| 🔼 **Litoral Norte** | Olinda, Rio Doce, Janga, Conceição, Maria Farinha, Catuama, Engenho Corrente, Forte Orange, Coroa do Avião, Vila Velha, Pilar, Ponta de Pedras, Carne de Vaca, Barra de Catuama |
| 🔽 **Litoral Sul** | Piedade, Candeias, Barra de Jangada, Gaibu, Calhetas, Suape, Enseada dos Corais, Porto de Galinhas, Muro Alto, Maracaípe, Serrambi, Sirinhaém, Barra de São Miguel, Barra do Rio, São José da Coroa Grande, Carneiros, Tamandaré, Guadalupe |
| 🏝️ **Ilha Oceânica** | Fernando de Noronha |

---

## 🔬 Metodologia

Os dados de horário e altura das marés são extraídos da **Tábua de Marés DHN 2026 — Porto do Recife (Carta 902)**, referência oficial localizada em:

- **Latitude:** 08°03'.4 S
- **Longitude:** 34°52' W
- **Fuso horário:** UTC-03:00 (Horário de Brasília)
- **Nível médio:** 1,28 m

Para as demais praias, aplica-se uma **correção de horário individual** (entre −35 e +26 minutos) em relação ao Porto do Recife, seguindo as diferenças hidrográficas características de cada localidade ao longo do litoral pernambucano.

A curva de maré entre os eventos tabelados é gerada por **interpolação cosseno**, o mesmo método adotado internacionalmente pelas tábuas de marés para representar o comportamento ondulatório das marés ao longo do dia.

---

## 🛠️ Tecnologias

- **React** — interface e gerenciamento de estado
- **Recharts** — gráfico de área interativo
- **Vite** — bundler e servidor de desenvolvimento
- **CSS-in-JS** — estilização inline para portabilidade

---

## 🚀 Como Rodar

### Pré-requisitos
- [Node.js](https://nodejs.org) (versão LTS recomendada)
- [VSCode](https://code.visualstudio.com) ou qualquer editor de sua preferência

### Instalação

```bash
# 1. Crie o projeto com Vite
npm create vite@latest tabua-de-mare -- --template react
cd tabua-de-mare

# 2. Instale as dependências
npm install
npm install recharts

# 3. Substitua o App.jsx pelo arquivo do projeto
# Copie o conteúdo de tabua-mare.jsx para src/App.jsx

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

### Estrutura do Projeto

```
tabua-de-mare/
├── src/
│   ├── App.jsx        ← componente principal (tabua-mare.jsx)
│   └── main.jsx       ← entrada da aplicação
├── index.html
├── package.json
└── README.md
```

---

## ⚠️ Aviso

As previsões apresentadas neste aplicativo são baseadas nos dados oficiais da DHN para o Porto do Recife. As correções de horário aplicadas às demais praias são **aproximações hidrográficas** e podem apresentar variações de **±10 a 30 minutos** em relação à maré real local.

> **Para fins de segurança náutica, pesca profissional ou qualquer atividade que exija precisão absoluta, consulte sempre as publicações oficiais da [Marinha do Brasil](https://www.marinha.mil.br/dhn/).**

---

## 👤 Autor

Desenvolvido por **Eduardo**

---

## 📄 Fonte dos Dados

**Diretoria de Hidrografia e Navegação (DHN) — Marinha do Brasil**
Tábua de Marés 2026 · Porto do Recife · Carta Náutica 902
[www.marinha.mil.br/dhn](https://www.marinha.mil.br/dhn/)

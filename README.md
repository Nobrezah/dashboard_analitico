# dashboard_analitico
# 📊 Dashboard Analítico

Painel de análise de dados construído com **Next.js 14**, **TypeScript** e **Recharts**.

## ✨ Funcionalidades

- KPI cards com variação percentual
- Gráfico de área interativo (Receita / Despesa / Lucro)
- Tabela de top produtos com tendências
- Barras de progresso de metas mensais
- Sidebar de navegação responsiva
- Layout responsivo com Tailwind CSS

## 🛠 Stack

| Tecnologia     | Uso                              |
|----------------|----------------------------------|
| Next.js 14     | Framework React com App Router   |
| TypeScript     | Tipagem estática                 |
| Tailwind CSS   | Estilização utility-first        |
| Recharts       | Gráficos e visualização de dados |

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx       # Layout raiz
│   ├── page.tsx         # Página principal
│   └── globals.css
├── components/
│   ├── Sidebar.tsx      # Navegação lateral
│   ├── KpiCard.tsx      # Cards de métricas
│   ├── RevenueChart.tsx # Gráfico de receita
│   └── TopProductsTable.tsx
├── lib/
│   └── data.ts          # Dados mock
└── types/
    └── index.ts         # Interfaces TypeScript
```

import { Sidebar } from "@/components/Sidebar";
import { KpiCardComponent } from "@/components/KpiCard";
import { RevenueChart } from "@/components/RevenueChart";
import { TopProductsTable } from "@/components/TopProductsTable";
import { salesData, kpiCards, topProducts } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Visão Geral</h1>
          <p className="text-gray-500 text-sm mt-1">
            Dados atualizados em tempo real — 2024
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {kpiCards.map((card) => (
            <KpiCardComponent key={card.title} card={card} />
          ))}
        </div>

        {/* Chart */}
        <div className="mb-8">
          <RevenueChart data={salesData} />
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <TopProductsTable products={topProducts} />

          {/* Mini stats */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-6">
              Metas do Mês
            </h2>
            <div className="space-y-5">
              {[
                { label: "Receita",    current: 85, color: "bg-green-500"  },
                { label: "Novos Clientes", current: 62, color: "bg-blue-500"  },
                { label: "Retenção",   current: 91, color: "bg-purple-500" },
                { label: "NPS",        current: 78, color: "bg-orange-500" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium text-gray-900">{item.current}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.current}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

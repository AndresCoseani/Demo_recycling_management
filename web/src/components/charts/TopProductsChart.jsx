import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import api from "../../lib/apiClient";

export default function TopProductosChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Hardcoded demo data
    const mockData = [
      { producto: "Caja Estándar A", total_cantidad: 1540 },
      { producto: "Caja Premium B", total_cantidad: 1210 },
      { producto: "Material Mixto", total_cantidad: 920 },
      { producto: "Caja Reforzada", total_cantidad: 780 },
      { producto: "Pack Ecológico", total_cantidad: 630 },
    ];

    setData(mockData);
  }, []);

  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h2 className="text-lg font-bold mb-4">Top 5 productos más vendidos</h2>

      <ResponsiveContainer width="100%" height={340}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ left: 15, right: 60 }}
        >
          <XAxis
            type="number"
            tickFormatter={(v) => v.toLocaleString("es-AR")}
            width={70}
            tickMargin={10}
            label={{
              value: "Cantidad",
              angle: 0,
              position: "insideLeft",
              dx: 510,
              dy: -13,
              style: { fill: "#155E3B", fontSize: 12, fontWeight: 600 },
            }}
          />
          <YAxis dataKey="producto" type="category" />
          <Tooltip />
          <Bar dataKey="total_cantidad" fill="#D96A1F" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

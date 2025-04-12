import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface Transaction {
  id: number;
  title: string;
  price: string;
  category: string;
  date: string;
}

interface ChartData {
  name: string;
  value: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const TransactionPieChart: React.FC = () => {
  // Get transactions from localStorage
  const transactions: Transaction[] = JSON.parse(localStorage.getItem("transactions") || "[]");

  // Transform transaction data for the pie chart
  const chartData: ChartData[] = transactions.map(transaction => ({
    name: transaction.title,
    value: parseFloat(transaction.price)
  }));

  return (
    <div className="w-full h-[400px] p-4 pt-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionPieChart; 
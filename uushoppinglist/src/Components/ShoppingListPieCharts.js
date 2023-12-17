import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import {useTranslation} from "react-i18next";


const COLORS = ['#019426', '#FF8042']; // barvy pro vyřešené a nevyřešené

const renderPieChart = (data) => (
  <PieChart width={400} height={400}>
    <Pie
      dataKey="value"
      isAnimationActive={false}
      data={data}
      cx={200}
      cy={200}
      outerRadius={80}
      fill="#8884d8"
      label
    >
      {
        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
      }
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

const ShoppingListPieCharts = ({ data }) => {
  const { t } = useTranslation();

  // If data is not provided, do not render the chart
  if (!data) return null;

  return (
    <div>

      {renderPieChart([
        { name: t('completed'), value: data.completed },
        { name: t('not_completed'), value: data.uncompleted }
      ])}
    </div>
  );
};

export default ShoppingListPieCharts;

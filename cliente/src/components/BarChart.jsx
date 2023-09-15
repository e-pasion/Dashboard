import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData, width, heigth }) => {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        width={100}
        height={170}
        options={{
          scales: {
            x: {
              grid: {
                color: "transparent",
              },
              ticks: {
                color: "rgba(255,255,255,0.09)",
                display: false,
              },
            },
            y: {
              min: 60,
              max: 160,
              grid: {
                color: "rgba(255,255,255,0.09)",
              },
              ticks: {
                display: true,
                color: "black",
                stepSize: 20,
              },
            },
          },
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

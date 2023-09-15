import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData,width=400,height=400,color="rgba(255,255,255,0.7)",min=0,max=2000,step=500,labelx=true,labely=true,pt=65,px=25,pb=15}) {
  return (
    <div className="chart-container">
      <Line 
        data={chartData}
        width={width}
        height={height}
        options={{
          scales:{
            x:{
              grid:{
                color:"transparent"
              },
              ticks:{
                color,
                display:labelx
              }
            },
            y:{
              min:min,
              max:max,
              grid:{
                color:"rgba(255,255,255,0.09)"
              },
              ticks:{
                display:labely,
                color,
                stepSize:step,
              }
            }
          },
          layout:{
            padding:{
              top:pt,
              left:px,
              right:px,
              bottom:pb
            }
          },
          maintainAspectRatio:false,
          plugins: {
            
            title: {
              display: false,
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;
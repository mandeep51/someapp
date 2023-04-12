import React from 'react'
import { Line } from 'react-chartjs-2';

function React_LineChart() {
const data={
    labels:['january','february','march','april','may'],
    datasets:[
        {
            label:'sales for 2020 in Millions',
            data:[3,2,7,5,4],
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label:'sales for 2022 in Millions',
            data:[8,2,5,7,1],
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        }
    ]
}
/* const options={
    title:{
        display:true,
        text:'line chart'
    },
    scales:{
        yAxes:[
            {
                ticks:{min:0,max:10,stepSize:1}
            }
        ]
    }
} */
  return (
    <div>
      <Line data={data} ></Line>
    </div>
  )
}

export default React_LineChart

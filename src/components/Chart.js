import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function setData(correct, wrong) {
    const data = {
        labels: [
          "맞았습니다",
          "틀렸습니다"
        ],
        datasets: [{
          data: [correct, wrong],
          backgroundColor: [
          '#00C896',
          '#1B1D22',
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          ]
        }]
      };
    return data;
}

function Chart(props) {
  return (
    <div>
        <h3>RESULT</h3>
        <Doughnut data={setData(props.correct,props.wrong)}/>
    </div>
  );
}
export default Chart;
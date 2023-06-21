import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
}

const data = {
  datasets: [
    {
      type: 'bar',
      label: 'Dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [
        { x: 'January', y: 14 },
        { x: 'February', y: 20 },
        { x: 'March', y: 32 },
        { x: 'April', y: 41 },
        { x: 'May', y: 15 },
        { x: 'June', y: 26 }
      ],
      borderColor: 'red',
      borderWidth: 2,
    },
  ],
};

const Chart = () => {

  return (
    <ChartContainer>
      <Line type="line" data={data} />
    </ChartContainer>
  );
};

export default Chart;

const ChartContainer = styled.div`
  width: 90vw;
  max-width: 900px;
`;
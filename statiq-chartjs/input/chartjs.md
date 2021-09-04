Title: My First Statiq page
---

<script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>

<div style="min-heigh:600; min-width:900">
  <canvas id="myChart" width="400" height="400"></canvas>
</div>

<script>
var ctx = document.getElementById('myChart').getContext('2d');


const worstCase = [1,60,70,80,90,100];
const averageCase = [1,40,50,60,70];
const bestCase = [1,10,20,30,40];


// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

const data = {
  labels: [1,2,3,4,5,6],
  datasets: [{
    label: 'Worst Case',
    data: worstCase,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
      tension: 0.4
  },
  {
    label: 'Average Case',
    data: averageCase,
    fill: false,
    borderColor: '#f67019',
      tension: 0.4
  },
  {
    label: 'Best Case',
    data: bestCase,
    fill: false,
    borderColor: '#8549ba',
      tension: 0.4
  }]
};

const config = {
  responsive: true,
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Algorithm Analysis'
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Input N"
        },
        suggestedMin: -10,
        suggestedMax: 200
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Number Of Operations'
        },
        suggestedMin: -10,
        suggestedMax: 110
      }
    }
  }
};

var myChart = new Chart(ctx, config);


</script>



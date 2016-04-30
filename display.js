
var chartTemplate = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
};
var myChart;
function onCreateView(rootContainer){
  var view = document.createElement('canvas');
  view.id = 'myChart';
  rootContainer.appendChild(view);
  
  myChart = new Chart(view, {
    type: 'line',
    data: chartTemplate,
    options: {
        xAxes: [{
            display: false
        }]
    }
});
  return view;
}

var counter = 0;
function onRender(view, data){
    counter++;
    myChart.data.labels.push(""+counter);
    myChart.data.datasets[0].data.push(data.total_users);
    myChart.update();
        console.log(""+ counter + " : " + data.total_users);

}

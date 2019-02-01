import { Line, mixins } from 'vue-chartjs';
import chartDefaults from './defaults';
export default Line.extend({
  mixins: [mixins.reactiveProp],
  // props: ['chartData', 'chartId'],
  // props:{
  //   chartId: 'cool-chart'
  // },
  data() {
    return {
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: true,
          labels: {
            fontColor: chartDefaults.fontColor
          }
        },
        tooltips: {
          enabled: true,
          mode: 'nearest'
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              stepValue: 3,
              max: 9,
              fontColor: chartDefaults.fontColor,
              beginAtZero: false
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: chartDefaults.fontColor,
              time: {
                unit: 'day'
              }
            }
          }]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
});

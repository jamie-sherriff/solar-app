import { Line, mixins } from 'vue-chartjs';
import chartDefaults from './defaults';
export default Line.extend({
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data() {
    return {
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartDefaults.fontColor
          },
          display: true
        },
        tooltips: {
          enabled: true,
          mode: 'nearest'
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              stepValue: 1,
              max: 9,
              beginAtZero: true,
              fontColor: chartDefaults.fontColor
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: chartDefaults.fontColor
            }
          }]
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
});

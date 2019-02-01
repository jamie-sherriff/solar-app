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
              stepValue: 1,
              max: 9,
              fontColor: chartDefaults.fontColor,
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: chartDefaults.fontColor
            },
            time: {
              unit: 'minute'
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
    this.chartId = 'LatestKpDataChart';
    this.renderChart(this.chartData, this.options);
  }
});

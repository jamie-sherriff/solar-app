<template>
  <div class="charts">
    <h3 class="title"> {{displayMonth}} Monthly Forecast Daily Peak Kp</h3>
    <div v-if="gotMonthChartData" class="full-row-chart">
      <MonthForecastChart chart-id="MonthForecastChart"
                          :chart-data="monthChartData">
      </MonthForecastChart>
    </div>
    <h3 class="title"> Recent Kp Values</h3>
    <!--<p>Chart Data: {{chartData}}</p>-->
    <!--:options="{responsive: false, maintainAspectRatio: false}"-->
    <div v-if="gotChartData" class="full-row-chart">
      <LatestKpDataChart chart-id="LatestKpDataChart"
                         :chart-data="chartData">
      </LatestKpDataChart>
    </div>
  </div>
</template>

<script>
  import LatestKpDataChart from '../charts/LatestKpDataChart.js';
  import MonthForecastChart from '../charts/MonthForecastChart.js';
  import data from '../js/DataStore.js';
  import * as apiClient from '../js/ApiClient';
  import moment from 'moment-timezone';
  import * as processChartData from '../js/ProcessChartData';

  export default {
    data() {
      return {
        gradient: null,
        chartData: null,
        monthChartData: null,
        gotChartData: false,
        gotMonthChartData: false,
        httpError: {},
        displayMonth: '',
        data
      };
    },
    name: 'Charts',
    components: {
      LatestKpDataChart,
      MonthForecastChart
    },
    created() {
      let currentMonth = moment.tz().local().format('MMMM');
      let endMonth = moment.tz().local().add(1, 'months').format('MMMM');
      if (currentMonth !== endMonth) {
        this.displayMonth = `${currentMonth} - ${endMonth}`;
      } else {
        this.displayMonth = currentMonth;
      }
    },
    mounted() {
      apiClient
        .getAllLatestKp()
        .then((jsonKpData) => {
          this.chartData = processChartData.allLatestKpData(jsonKpData);
//          var ctx = document.getElementById('MonthForecastChart').getContext("2d");
//          this.gradient = ctx.createLinearGradient(0, 0, 0, 450);
//          this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
//          this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
//          this.gradient.addColorStop(0.9, 'rgba(255, 0, 0, 0)');
//          this.chartData.datasets[0].backgroundColor = this.gradient;
          this.gotChartData = true;
        });
      apiClient
        .getMonthForecast()
        .then((jsonKpData) => {
          this.monthChartData = processChartData.monthForecastData(jsonKpData);
          this.gotMonthChartData = true;
        });
    }
  };
</script>

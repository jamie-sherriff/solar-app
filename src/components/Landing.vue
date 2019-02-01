<template>
  <div class="Landing">
    <p v-if="latestKp.time_tag">Aurora strength is {{latestKp.estimated_kp}} Kp</p>
    <p v-else-if="latestKpError.response">
      <span v-html="error.response.data"></span>
    </p>
    <p v-else-if="latestKpError.message" class="content has-text-danger">
      {{latestKpError.message}}
      <br>
      Please use the contact form on the about page if the issue persists.
    </p>
    <p v-else-if="errorOccurred">
      {{JSON.stringify(latestKpError)}}
      <br>
      {{JSON.stringify(threeDayForeCastError)}}
    </p>
    <p v-else class="content has-text-info">Loading...</p>
    <div class="container">
      <p v-if="threeDayForeCast.retrievedAt">
        <span v-text="threeDayForeCast.product"></span>
        <span>{{threeDayForeCast.timeIssued}}</span>
        <br>
      </p>
      <span v-if="threeDayForeCast.retrievedAt" class="landing-charts">
      <!--<p>Chart Data: {{chartData}}</p>-->
        <!--:options="{responsive: false, maintainAspectRatio: false}"-->
        <!--:width="400"-->
        <!--:height="200"-->
      <ThreeDayFutureChart chart-id="ThreeDayFutureChart"
        :chart-data="chartData">
      </ThreeDayFutureChart>
    </span>
      <p> Recent Kp Values</p>
      <!--<p>Chart Data: {{chartData}}</p>-->
      <!--:options="{responsive: false, maintainAspectRatio: false}"-->
      <div v-if="gotLatestKpChartData" class="full-row-chart">
        <LatestKpDataChart chart-id="LatestKpDataChart"
                           :chart-data="latestKpChartData">
        </LatestKpDataChart>
      </div>

    </div>

<br>
    <p v-if="threeDayForeCast.retrievedAt">
      <span v-html="threeDayForeCast.rationale"></span>
    </p>
    <br>
    <p v-if="lastUpdateTimeDisplayLocal">
      <span>Solar data last updated {{lastUpdateTimeDisplayLocal}}</span>
    </p>
  </div>
</template>

<script>
  import { HTTP } from '../js/http-common';
  import moment from 'moment-timezone';
  import * as processChartData from '../js/ProcessChartData';
  import ThreeDayFutureChart from '../charts/ThreeDayFutureChart.js';
  import LatestKpDataChart from '../charts/LatestKpDataChart.js';
  import dataStore from '../js/DataStore.js';
  import * as apiClient from '../js/ApiClient';
  import * as helpers from '../js/helpers';
  dataStore.awesomeLanding = 'awesomeLanding';
  export default {
    data: () => ({
      latestKp: {},
      threeDayForeCast: {},
      errorOccurred: false,
      latestKpError: {},
      threeDayForeCastError: {},
      chartData: null,
      latestKpChartData: null,
      lastUpdateTimeDisplayLocal: null,
      gotLatestKpChartData: false,
      dataStore
    }),
    name: 'Landing',
    components: {
      ThreeDayFutureChart,
      LatestKpDataChart
    },
    beforeCreate() {
      apiClient
        .getAllLatestKp()
        .then((jsonKpData) => {
          this.latestKpChartData = processChartData.allLatestKpData(jsonKpData);
          this.gotLatestKpChartData = true;
        });

      HTTP.get(`latestKp`)
        .then((response) => {
          const jsonResponse = response.data;
          jsonResponse.time_tag = moment.tz(jsonResponse.time_tag, 'YYYY-MM-DD HH:mm:SS', 'UTC').local().format('H:mm A');
          jsonResponse.estimated_kp = Math.round(jsonResponse.estimated_kp * 10) / 10;
          this.latestKp = response.data;
        })
        .catch((error) => {
          this.errorOccurred = true;
          console.error(`latestKp Error: ${error}`);
          this.latestKpError = error;
        });

      HTTP.get(`3dayforecast`)
        .then((response) => {
          const jsonResponse = response.data;
          this.chartData = processChartData.forecastChartData(jsonResponse);
          jsonResponse.timeIssued = moment.tz(jsonResponse.timeIssued, 'YYYY-MMM-DD-HHmm[-UTC]', 'UTC').local().calendar();
          this.threeDayForeCast = jsonResponse;
          this.lastUpdateTimeDisplayLocal = helpers.convertIsoToLocalDisplay(response.retrievedAt);
        })
        .catch((error) => {
          this.errorOccurred = true;
          console.error(`threeDayForeCastError Error: ${error}`);
          this.threeDayForeCastError = error;
        });
    }
  };
</script>

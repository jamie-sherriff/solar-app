<template>
  <div class="Live">
    <h3 class="title">Live World View</h3>
    <!--<p>Chart Data: {{chartData}}</p>-->
    <!--:options="{responsive: false, maintainAspectRatio: false}"-->
    <div id="auroraMap" ref="auroraMap1"></div>
  </div>
</template>

<script>
  import LatestKpDataChart from '../charts/LatestKpDataChart.js';
  import data from '../js/DataStore.js';
  import * as apiClient from '../js/ApiClient';
  import mapping from '../js/mapping';
  import moment from 'moment-timezone';

  let GoogleMapsLoader = require('google-maps');
  const SunCalc = require('suncalc');

  GoogleMapsLoader.KEY = process.env.GOOGLE_MAPS_KEY;
  GoogleMapsLoader.LIBRARIES = ['visualization'];

  export default {
    data() {
      return {
        noMapData: true,
        chartData: null,
        gotChartData: false,
        httpError: {},
        google: null,
        auroraMap: null,
        data
      };
    },
    name: 'Charts',
    components: {
      LatestKpDataChart
    },
    beforeMount() {
      apiClient.getLocationFromIp()
        .then((responseJson) => {
          const locationJson = responseJson.location;
          GoogleMapsLoader.load(function (google) {
            const chchch = new google.maps.LatLng(locationJson.latitude, locationJson.longitude);
            const times = SunCalc.getTimes(new Date(), locationJson.latitude, locationJson.longitude);
            const duskTime = moment(times.nauticalDusk).local();
            const dawnTime = moment(times.dawn).local();
            const mapOptions = {
              zoom: 3,
              center: chchch,
              mapTypeId: 'roadmap',
              scaleControl: true,
              streetViewControl: false
            };
            if (moment().isSameOrAfter(duskTime) || moment().isSameOrBefore(dawnTime)) {
              mapOptions.styles = mapping.nightMapStyleArray;
            }
            const map = new google.maps.Map(document.getElementById('auroraMap'), mapOptions);
            const googleMapJson = [];
            apiClient
              .getAuroraForecastNowMap()
              .then((mapData) => {
                mapData.forEach((point) => {
                  googleMapJson.push({
                    location: new google.maps.LatLng(point.lat, point.lng),
                    weight: point.weight
                  });
                });
                // eslint-disable-next-line no-new
                new google.maps.visualization.HeatmapLayer({
                  dissipating: false,
                  // maxIntensity: 100000,
                  data: googleMapJson,
                  map: map
                });
              });
          });
        });
    }
  };
</script>

<template>
  <div class="Models">
    <h3 class="title">Aurora Forecast</h3>
    <img class="ModelImg" v-bind:src="imageSrc">
  </div>
</template>

<script>
  import * as apiClient from '../js/ApiClient';
  import dataStore from '../js/DataStore.js';

  export default {
    data: () => ({
      imageSrc: null
    }),

    created() {
      return apiClient
        .getLatestImage()
        .then((imageData) => {
          this.imageSrc = imageData;
          dataStore.imageSrc = imageData;
      });
    }
  };
</script>

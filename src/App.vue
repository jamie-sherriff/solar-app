<template>
  <div id="app">
    <header>
      <span class="has-text-centered">Solar Progressive Web App</span>
      <div class="dropdown is-right" id="dropdown-menu2">
        <div class="dropdown-trigger">
          <i class="fa fa-bars fa-2x" id="secret-button" aria-haspopup="true" aria-controls="dropdown-menu2"></i>
        </div>
        <div class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <p>
              Menu
            </p>
            <hr class="dropdown-divider">
            <router-link to="/About" class="button is-success is-outlined">About</router-link>
            <hr class="dropdown-divider">
            <router-link to="/Subscribe" class="button is-success is-outlined">Subscribe</router-link>
            <hr class="dropdown-divider">
            <router-link to="/UnSubscribe" class="button is-success is-outlined">Unsubscribe</router-link>
            <hr class="dropdown-divider">
            <button @click="show(false, false, false)" class="button is-info" id="whatIsKpModal">
              What Do Kp Values mean?
            </button>
            <modal name="what-is-kp"
                   height="auto"
                   :adaptive="true"
                   :min-width="300"
                   @before-open="beforeOpen"
                   @closed="closed">
              <div v-html="whatIsKp"></div>
            </modal>
            <hr class="dropdown-divider">
            <div class="dropdown-item">
              <p id="version-number-text">Version: {{appVersionNumber}}</p>
            </div>
          </div>
        </div>
      </div>
      <span  class="has-text-warning" v-if="isOffline">Offline Mode</span>
    </header>
    <nav>
      <router-link to="/latest" class="button is-success is-outlined">
        <div class="nav-col">
          <i class="fa fa-sun-o fa-lg" aria-hidden="true"></i>
          <p>Latest</p>
        </div>
      </router-link>

      <router-link to="/models" class="button is-success is-outlined">
        <div class="nav-col">
          <i class="fa fa-picture-o fa-lg" aria-hidden="true"></i>
          <p>Models</p>
        </div>
      </router-link>
      <router-link to="/Charts" class="button is-success is-outlined">
        <div class="nav-col">
          <i class="fa fa-line-chart fa-lg" aria-hidden="true"></i>
          <p>Charts</p>
        </div>
      </router-link>
      <router-link to="/Live" class="button is-success is-outlined">
        <div class="nav-col">
          <i class="fa fa-globe fa-lg" aria-hidden="true"></i>
          <p>Live</p>
        </div>
      </router-link>
    </nav>
    <!--<p>You chose <b>{{$route.name}}</b></p>-->
    <main>
      <!--<img src="./assets/logo.png" alt="Vue.js PWA">-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <br>
      <p id="copyright-text">&copy; 2017-{{new Date().getFullYear()}} Jamie Sherriff</p>
    </main>
  </div>
</template>

<script>
//  import * as apiClient from './js/ApiClient';
  import dataStore from './js/DataStore.js';
  import constants from './js/constants.js';

  const packageJson = require('../package.json');
  dataStore.appVersionNumber = packageJson.version;

  export default {
    name: 'app',
    mounted() {
      const button = document.querySelector('#secret-button');
      const dropdown = document.querySelector('#dropdown-menu2');
      button.addEventListener('click', () => {
        dropdown.classList.toggle('is-active');
      });
      window.onclick = (event) => {
        if (!event.target.matches('#secret-button')) {
          let dropdowns = document.getElementsByClassName('dropdown is-right');
          let i;
          for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (!this.isWhatIsKpShown) {
              if (!event.target.matches('#whatIsKpModal') && openDropdown.classList.contains('is-active')) {
                openDropdown.classList.remove('is-active');
              }
            }
          }
        }
      };
    },
    methods: {
      show() {
        this.$modal.show('what-is-kp');
      },
      hide() {
        this.$modal.hide('what-is-kp');
      },
      closed() {
        setTimeout(
          () => {
            this.isWhatIsKpShown = false;
          }, 500);
      },
      beforeOpen() {
        this.isWhatIsKpShown = true;
      }
    },
    data() {
      return {
        isOffline: !navigator.onLine,
        isWhatIsKpShown: false,
        whatIsKp: constants.whatIsKp,
        appVersionNumber: packageJson.version,
        imageSrc: null,
        dataStore
      };
    },
    beforeCreate() {
//      apiClient.getShortTermForecast()
//        .then((shortTermForecastData) => {
//          dataStore.shortTermForecastData = shortTermForecastData;
//        });
    }
  };
</script>

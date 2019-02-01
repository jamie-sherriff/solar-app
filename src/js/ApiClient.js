import { HTTP } from './http-common';
import dataStore from '../js/DataStore.js';

function doGetRequest(endpoint) {
  return HTTP
    .get(endpoint)
    .catch((error) => {
      console.error(`error occured with ${endpoint}`);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
      console.error(error.config);
      throw Error(error);
    });
}

function doJsonPost(endpoint, jsonPayload) {
  return HTTP
    .post(endpoint, jsonPayload)
    .catch((error) => {
      console.error(`doJsonPost: error occured with ${endpoint}`);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
      console.error(error.config);
      throw error;
    });
}

export function getLatestImage() {
  return doGetRequest('latestForecastImage')
    .then((response) => {
      const base64Image = 'data:image/jpeg;base64,' + response.data;
      dataStore.latestForecastImage = base64Image;
      return base64Image;
    });
}

export function getAllLatestKp() {
  return HTTP
    .get(`allLatestKp`).then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(`allLatestKp Error: ${error}`);
      throw error;
    });
}

export function getShortTermForecast() {
  return HTTP
    .get(`shortTermForecast`).then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(`getShortTermForecast Error: ${error}`);
      throw error;
    });
}

export function getMapJson() {
  return HTTP
    .get(`mapJson`).then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(`getMapJson Error: ${error}`);
      throw error;
    });
}

export function getAuroraForecastNowMap() {
  return HTTP
    .get(`auroraForecastNowMap`).then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(`getAuroraForecastNowMap Error: ${error}`);
      throw error;
    });
}

export function getMonthForecast() {
  return HTTP
    .get(`monthForecast`).then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(`getMonthForecastData Error: ${error}`);
      throw error;
    });
}

export function getLocationFromIp() {
  return HTTP
    .get(`getLocation`).then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(`getLocation Error: ${error}`);
      throw error;
    });
}

export function postEmailSubscription(emailJson) {
  return doJsonPost('emailSubscribe', emailJson);
}

export function removeEmailSubscription(emailJson) {
  return doJsonPost('removeEmailSubscribe', emailJson);
}

export {doGetRequest};

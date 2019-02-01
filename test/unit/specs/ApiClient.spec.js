import Vue from 'vue';
import * as apiClient from '../../../src/js/ApiClient';
import MockAdapter from 'axios-mock-adapter';
import {HTTP} from '../../../src/js/http-common';

// Docs: https://github.com/ctimmerm/axios-mock-adapter


describe('ApiClient.vue', () => {
  let mock;

  before(() => {
    mock = new MockAdapter(HTTP);
  });


  it('allLatestKp should response with some data', () => {
    mock.onGet('/allLatestKp').reply(200, {
      'data': [['2019-01-30 07:51:00', 0, '0Z'], ['2019-01-30 07:52:00', 0, '0Z'], ['2019-01-30 07:53:00', 0, '0Z'], ['2019-01-30 07:54:00', 0, '0Z']],
      'keys': ['time_tag', 'estimated_kp', 'kp']
    });
    return apiClient.getAllLatestKp().then((response) => {
      expect(response.data).to.have.lengthOf(4);
      expect(response).to.have.all.keys('data', 'keys');
    });
  });

  it('allLatestKp should fail with network error', () => {
    mock.onGet('/allLatestKp').networkErrorOnce();
    let failingRequest = function () {
      return apiClient.getAllLatestKp();
    };
    expect(failingRequest).should.be.rejected;
    return failingRequest().catch((error) => {
      return expect(error.message).to.equal('Network Error');
    });
  });

  it('doGetRequest works correctly', () => {
    mock.onGet('/allLatestKp').reply(200, {
      'data': [['2019-01-30 07:51:00', 0, '0Z'], ['2019-01-30 07:52:00', 0, '0Z'], ['2019-01-30 07:53:00', 0, '0Z'], ['2019-01-30 07:54:00', 0, '0Z']],
      'keys': ['time_tag', 'estimated_kp', 'kp']
    });
    return apiClient.doGetRequest('allLatestKp').then((response) => {
      expect(response.data).to.exist;
      expect(response.data.data).to.have.lengthOf(4);
      expect(response.data).to.have.all.keys('data', 'keys');
    });
  });

  it('doGetRequest should fail with network error', () => {
    mock.onGet('/allLatestKp').networkErrorOnce();
    let failingRequest = function () {
      return apiClient.doGetRequest('allLatestKp');
    };
    expect(failingRequest).should.be.rejected;
    return failingRequest().catch((error) => {
      return expect(error.message).to.equal('Error: Network Error');
    });
  });

  it('doGetRequest should fail with 500', () => {
    mock.onGet('/allLatestKp').reply(500, {data: {key: 'value'}
    });
    let failingRequest = function () {
      return apiClient.doGetRequest('allLatestKp');
    };
    expect(failingRequest).should.be.rejected;
    return failingRequest().catch((error) => {
      return expect(error.message).to.equal('Error: Request failed with status code 500');
    });
  });
});

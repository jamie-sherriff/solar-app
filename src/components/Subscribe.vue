<template>
  <div class="subscribe">
    <div class="subscribe-container">
    <h3 class="title">Subscribe To Notifications</h3>
        <p>Fill in your email and click the button below to subscribe to notifications.</p>
        <p>
           Your email address
        </p>
        <input v-model="emailAddress" placeholder="Email Address" v-validate="'required|email'" type="text"
               name="email" class="input is-medium">

        <p v-show="validateErrors.has('email')" class="help is-danger">{{ validateErrors.first('email') }}</p>
        <br>
        <p>
          Name to appear on your subscription
        </p>
        <input v-model="usersName" placeholder="Your Name" class="input is-medium">
        <p>
          Kp Value to trigger alert
        </p>
        <div>
          <select v-model="kpValue" class="select is-medium">
            <option disabled value="">Please select one</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
          </select>
          <p>
            Email Frequency
          </p>
          <div>
            <select v-model="alertFreq" class="select is-medium">
              <option disabled value="">Please select one</option>
              <option value="once">Once Per Day</option>
              <!--<option value="weekly">Weekly Forecast Update</option>-->
              <!--<option value="monthly">Monthly Forecast Update</option>-->
              <option value="any">Get All Alerts</option>
              <option disabled value="n/a">More Options to Come</option>
            </select>
          </div>
        </div>
        <br>
        <button v-on:click="sendSubscription" class="button is-primary">
          Submit Information
        </button>
    </div>
  </div>
</template>
<script>
  import * as apiClient from '../js/ApiClient';
  import moment from 'moment-timezone';

  export default {
    data: () => ({
      usersName: '',
      emailAddress: '',
      checkedNames: [],
      kpValue: '',
      alertFreq: ''
    }),
    methods: {
      sendSubscription() {
        if (this.emailAddress.length > 3 && this.kpValue !== '' && this.usersName.length >= 3) {
          const emailJson = {
            alertFreq: this.alertFreq,
            usersName: this.usersName,
            email: this.emailAddress,
            kpValue: parseInt(this.kpValue),
            timezone: moment.tz.guess()
          };
          apiClient.postEmailSubscription(emailJson).then((response) => {
            this.emailAddress = '';
            setTimeout(
              () => {
                this.validateErrors.clear();
              }, 250);
            this.usersName = '';
            this.usersName = '';
            this.kpValue = '';
            this.alertFreq = '';
            this.$notify({
              duration: 5000,
              type: 'success',
              group: 'subscribeNotification',
              title: 'Success',
              text: response.data.message
            });
          });
        } else {
          this.$notify({
            duration: 5000,
            type: 'warning',
            group: 'subscribeNotification',
            title: 'Missing data field',
            text: 'Missing email or kpValue'
          });
        }
      }
    }
  };
</script>

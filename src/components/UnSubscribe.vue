<template>
  <div class="UnSubscribe">
    <div class="subscribe-container">
      <h3 class="title">Unsubscribe To Notifications</h3>
      <p>Fill in your email and click the button below to Unsubscribe to notifications.</p>
      <p>
        Your email address
      </p>
      <input v-model="emailAddress" placeholder="Email Address" v-validate="'required|email'" type="text"
             name="email" class="input is-medium">

      <p v-show="validateErrors.has('email')" class="help is-danger">{{ validateErrors.first('email') }}</p>
      <br>
      <br>
      <button v-on:click="UndoSubscription" class="button is-primary">
        Unsubscribe
      </button>
    </div>
  </div>
</template>
<script>
  import * as apiClient from '../js/ApiClient';

  export default {
    data: () => ({
      emailAddress: '' // null over empty string to reset required validation
    }),
    methods: {
      UndoSubscription() {
          if (this.emailAddress.length > 3) {
            const emailJson = {
              emailAddress: this.emailAddress
            };
            apiClient.removeEmailSubscription(emailJson).then((response) => {
              this.emailAddress = '';
              this.$notify({
                duration: 5000,
                type: 'success',
                group: 'subscribeNotification',
                title: 'Success',
                text: response.data.message
              });
            }).catch((error) => {
              this.emailAddress = '';
              this.$notify({
                duration: 5000,
                type: 'error',
                group: 'subscribeNotification',
                title: 'Error',
                text: error.response.data.message
              });
            });
          } else {
            // this.validateErrors.clear();
            this.$notify({
              duration: 5000,
              type: 'warning',
              group: 'subscribeNotification',
              title: 'Missing data field',
              text: 'Missing email'
            });
          }
      }
    }
  };
</script>

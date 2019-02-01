<template>
  <div class="About">
    <h3 class="title">About</h3>
    <p class="subtitle is-4">Welcome to Solar App</p>
    <div class="container is-fluid">
      <p>
        This is a
        <a target="_blank" href="https://developers.google.com/web/progressive-web-apps/">Progressive
          Web app (Google)</a>
        that displays solar data pertaining to aurora strength that is retrieved from the <a
        href="http://www.swpc.noaa.gov/">National Oceanic and Atmospheric Administration</a>. It is designed to be viewed on any desktop or mobile device.
        However if you have an android device you have the ability to install the app via Chrome.
      </p>
      <br>
      <p>
        <strong class="strong-heading">What is the purpose of this site?</strong>
        <br>
        To give realtime and forecast information on the aurora borealis and australis, in particular for the use of
        photography.
      </p>
      <br>
      <p>
        <strong class="strong-heading">What is an aurora?</strong>
        <br>
        An aurora (plural: auroras),[a] sometimes referred to as polar lights,
        northern lights (aurora borealis) or southern lights (aurora australis),
        is a natural light display in the Earth's sky, predominantly seen in the high latitude regions
        (around the Arctic and Antarctic). <a
        href="https://en.wikipedia.org/wiki/Aurora">Source Wikipedia</a>
      </p>
      <br>
      <p>
        <strong class="strong-heading">Want to get started?</strong>
        <br>
        Feel free to subscribe to alerts as you will get emailed with your desired Kp level.
        <br>
        (This will only occur once per day if alerts are present)
      </p>
      <br>
    </div>
    <div class="row">
      <a href="https://sherriff.kiwi/">Personal Website</a>
    </div>
    <div class="row">
      <a href="https://github.com/jamie-sherriff/solar-activity-server">Source Code For Server</a>
    </div>
    <div class="row">
      <a href="https://github.com/jamie-sherriff/solar-app">Source Code For Web App</a>
    </div>

<br>
    <div id="contact">
      <h2 class="title is-4">Get in Touch</h2>
      <div id="contact-form">
        <form method="POST" action="https://formspree.io/sherriffjamienz@gmail.com">
          <div class="row">
            <input type="hidden" name="_subject" value="Contact request from personal website"/>
            <input type="email" name="_replyto" placeholder="Your email" required class="input">
          </div>
          <br>
          <div class="row">
            <textarea name="message" placeholder="Your message" class="textarea" required>
            </textarea>
          </div>
          <br>
          <div class="row">
            <button type="submit" class="button">Send</button>
          </div>
        </form>
      </div>
      <!-- End #contact-form -->
    </div>
  </div>
</template>

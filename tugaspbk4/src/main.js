// src/main.js

import { createApp } from 'vue';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css'; // Import icon libraries
import 'quasar/src/css/index.sass'; // Import Quasar css
import App from './App.vue'; // Import root component

const app = createApp(App);

app.use(Quasar, {
  plugins: {}, // Import Quasar plugins and add here
});

app.mount('#app');

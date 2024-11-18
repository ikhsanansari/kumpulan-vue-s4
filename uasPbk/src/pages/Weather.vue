<template>
    <div class="q-pa-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">Current Weather</div>
        </q-card-section>
        
        <q-card-section v-if="weatherData">
          <div>Location: {{ weatherData.name }}</div>
          <div>Temperature: {{ weatherData.main.temp }} °C</div>
          <div>Weather: {{ weatherData.weather[0].description }}</div>
        </q-card-section>
        
        <q-card-section v-else>
          <q-spinner-dots color="primary" size="50px" />
          <div>Loading weather data...</div>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'Weather',
    computed: {
      ...mapGetters('weather', ['getWeatherData']),
      weatherData() {
        return this.getWeatherData
      }
    },
    created() {
      this.$store.dispatch('weather/fetchWeatherData')
    }
  }
  </script>
  
  <style scoped>
  /* CSS styling for the weather page */
  </style>
  
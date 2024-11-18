import axios from 'axios'

const state = {
  weatherData: null
}

const getters = {
  getWeatherData: state => state.weatherData
}

const actions = {
  async fetchWeatherData({ commit }) {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=YOUR_API_KEY&units=metric')
      commit('setWeatherData', response.data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }
}

const mutations = {
  setWeatherData: (state, data) => (state.weatherData = data)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

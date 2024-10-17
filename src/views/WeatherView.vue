<template>
  <div class="text-center">
    <div class="header">
      <h1>WEATHER APP</h1>
      <div class="search-bar">
        <input type="text" v-model="city" placeholder="Enter city name" class="search-input" />
        <button @click="searchByCity" class="search-button">Search</button>
        <main>
          <!--If there are no data returned, then skip rendering the information-->
          <div v-if="weatherData">
            <!--Display the weather data attribute returned from API
          Example of API data: https://openweathermap.org/current-->
            <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
            <div>
              <!--The image source of of the weather icon will be coming from a function called iconUrl
                which will be shared in script later-->
              <img :src="iconUrl" alt="Weather Icon" />
              <p>{{ temperature }} °C</p>
            </div>
            <!-- weather[0] means the current weather, the way we need to obtain data depends on how
          the API JSON data looks-->
            <span>{{ weatherData.weather[0].description }}</span>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const apikey = '4b9a1eab00445af7e28172edb5616f0b'
const city = ref('')
const iconUrl = ref('')
const temperature = ref('')
const weatherData = ref('')
const searchByCity = async () => {
  //const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`;
`
  await fetchWeatherData(url)
}

const fetchCurrentLocationWeather = async () => {
  //The navigator.geolocation object is part of the Web API provided by modern web browsers
  //Please note this function is not belongs to Vue or openweather.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords
      //API link to obtain the current weather based on the current location browser identified
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
      //await means wait for the fetchWeatherData method to complete before proceeding
      await fetchWeatherData(url)
    })
  }
}
const fetchWeatherData = async (url) => {
  try {
    const response = await axios.get(url)
    //Returned data from API is stored as JSON file in weatherData
    weatherData.value = response.data
    console.log('data', response.data)
    iconUrl.value = response.data
      ? `http://api.openweathermap.org/img/w/${response.data.weather[0].icon}.png`
      : null
    temperature.value = response.data ? Math.floor(response.data.main.temp - 273) : null
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}
fetchCurrentLocationWeather()
</script>

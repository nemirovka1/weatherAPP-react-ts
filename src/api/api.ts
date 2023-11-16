import axios from "axios";

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/'
const WEATHER_API_KEY = 'ec1cc183087f21079b81cb4f83b60334'
export const getCurrentWeather = async (city: string) => {
    return axios.get(`${WEATHER_API_URL}weather?q=${city}&units=imperial&appid=${WEATHER_API_KEY}`)
}

import './weatherCardStyle.css'
import { WeatherList } from "../types/types"
export const WeatherCard = ({ weather }: { weather: WeatherList | null }) => {
    if(!weather || !weather.main) return null

    return (
        <div className="container">
            <div className="top">
                <div className="location">
                    <h2>{weather.name}</h2>
                </div>
                <div className="temp">
                   <h1>{weather.main.temp.toFixed()}°F</h1>
                </div>
                <div className="description">
                    <h2>{weather.weather[0].main}</h2>
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    <p className='bold'>{weather.main.temp_max.toFixed()}°F</p>
                    <p>Max Temp</p>
                </div>
                <div className="feels">
                    <p className='bold'>{weather.main.temp_min.toFixed()}°F</p>
                    <p>Min Temp</p>
                </div>
                <div className="wind">
                    <p className='bold'>{weather.wind.speed.toFixed()} MPH</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    )
}

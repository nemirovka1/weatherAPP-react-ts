import React, {useState} from 'react'
import './index.css'
import { WeatherCard } from './components/WeatherCard'
import {SearchSection} from "./components/SearchSection"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {WeatherList} from "./types/types"
function App() {
    const [data, setData] = useState<WeatherList | null>(null)

    return (
        <div className="app">
            <div className="search">
                <SearchSection handleSetWeather={(weather: WeatherList)=>setData(weather)}/>
            </div>
            <WeatherCard weather={data} />
            <ToastContainer />
        </div>
    );
}

export default App;

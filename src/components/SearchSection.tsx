import React, { useEffect, useMemo, useState } from "react"
import { getCurrentWeather } from "../api/api"
import { WeatherList } from "../types/types"
import { HistoryCityList } from "./HistoryCityList"
import { toast } from "react-toastify"

export const SearchSection = ({ handleSetWeather } : { handleSetWeather: (weather: WeatherList) => void }) => {
    const [location, setLocation] = useState('')
    const [history, setHistory] = useState<string[]>([])
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false)
    const [lastRemovedCity, setLastRemovedCity] = useState<string | null>(null)

    useEffect(() => {
        const storedHistory = localStorage.getItem('weatherSearchHistory')
        if (storedHistory) {
            setHistory(JSON.parse(storedHistory))
        }
    }, [])
    const searchLocation = async (value: string) => {
        try {
            const weatherList = await getCurrentWeather(value)
            handleSetWeather(weatherList.data)
            addToHistory(value)
        }catch (error) {
            toast.error('Something went wrong')
            setLocation('')
        }
    }
    const addToHistory = (city: string) => {
        const newHistory = [city, ...history.filter((item) => item !== city)]
        setHistory(newHistory)
        localStorage.setItem('weatherSearchHistory', JSON.stringify(newHistory))
    }
    const removeFromHistory = (city: string) => {
        const newHistory = history.filter((item) => item !== city)
        setHistory(newHistory)
        setLastRemovedCity(city)
        localStorage.setItem('weatherSearchHistory', JSON.stringify(newHistory))
    }
    const undoRemove = () => {
        if (lastRemovedCity) {
            addToHistory(lastRemovedCity)
            setLastRemovedCity(null)
        }
    }
    const handleHistoryItemClick = (selectedOption: string) => {
        setLocation(selectedOption)
        searchLocation(selectedOption)
    }

    const renderListItem = useMemo(() => {
        if(!isInputFocused || history.length === 0) return null

        return <HistoryCityList
            lastRemovedCity={lastRemovedCity}
            history={history}
            undoRemove={undoRemove}
            isInputFocused={isInputFocused}
            handleHistoryItemClick={handleHistoryItemClick}
            removeFromHistory={removeFromHistory}
        />
    }, [isInputFocused,history])

    return (
        <div className="search_container">
            <input
                value={location}
                required
                placeholder={'Search City'}
                className="search_input"
                onChange={(e) =>setLocation(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlurCapture={() => setIsInputFocused(false)}
            />
            <button
                className="submit_btn"
                disabled={location.length === 0}
                onClick={() => searchLocation(location)}
            >
                Submit
            </button>
            {renderListItem}
        </div>
    )
}

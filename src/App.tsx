import { ChangeEvent, useEffect, useState } from "react";
import { optionType } from "./types";
import { forecastType } from "./types";
import Search from "./components/Search";
import Forecast from "./components/forecast";

function App():JSX.Element {


const [term, setTerm] = useState<string>('');
const [options, setOptions] = useState<[]>([]);
const [city, setCity] = useState<optionType | null> (null)
const [forecast, setForecast] = useState<forecastType | null> (null)

const getSearchOptions = (value: string) => {
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${'85fea86d0fa20fa29ce9440649afd52b'}`)
  .then(response => response.json())
  .then(data => setOptions(data))
}

const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value
  setTerm(value)
  if (value === '') return

  getSearchOptions(value)
}

const getForecast = (city: optionType) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${'85fea86d0fa20fa29ce9440649afd52b'}`)
  .then(response => response.json())
  .then(data => {
    const forecastData = {
      ...data.city, 
      list: data.list.slice(0, 16),
    }
    
    setForecast(forecastData)

  })
}

const onSubmit = () => {
  if (!city) return
  getForecast(city)
}

const onOptionSelect = (option: optionType) => {
  setCity(option)
 
}

useEffect (() => {
  if (city) {
    setTerm(city.name)
    setOptions([])
  }
}, [city])

  return <div className="wrapper">
    <main className="main">
      {forecast ? (<Forecast data = {forecast} />): (
        <Search term={term} options = {options} onInputChange = {onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit}/>
      )}
  </main>
  </div>
}
export default App;
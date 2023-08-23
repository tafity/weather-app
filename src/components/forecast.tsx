import { forecastType } from "../types";

type Props = {
    data: forecastType
}

const Degree = ({temp}: {temp:number}): JSX.Element => (
(
    <span className="degree">
        {temp}<sup>o</sup>
    </span>
))

const Forecast = ({data}:Props):JSX.Element => {
const currentWeather = data.list[0]

    return (
        <div className="forecastField">
            <section className="title">
                <h2 className="cityName">{data.name}, 
                <span className="countryName">{data.country}</span>
                </h2>
                <div className="mainDegree">
                <Degree temp = {Math.round(currentWeather.main.temp)} />
                </div>
                <p className="describe">{currentWeather.weather[0].description}</p>
                <p className="temps">
                H: <Degree temp={Math.ceil(currentWeather.main.temp_max)}  />
                L: {' '} <Degree temp={Math.floor(currentWeather.main.temp_min)} />
                </p>
            </section>
            
            <h2 className="hour">Hourly Forecast:</h2>
            <section className="hourlyWeather">
                {data.list.map ((item, i) => (
                    <div className="widget" key={i}>
                        <p>
                            {i === 0 ? 'Now' : new Date(item.dt*1000).getHours()}
                        </p>
                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`weather-icon-${item.weather[0].description}`} />
                        <p><Degree temp = {Math.round(item.main.temp)} /></p>
                    </div>
                ))}
            </section>
            <h2 className="day">Daily weather:</h2>
            <section className="hourlyWeather">
                {data.list.map ((item, i) => (
                    <div className="widget" key={i}>
                        <p>
                            {i === 0 ? 'Today' : new Date(item.dt_txt).getDate()}
                        </p>
                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`weather-icon-${item.weather[0].description}`} />
                        <p><Degree temp = {Math.round(item.main.temp)} /></p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Forecast;
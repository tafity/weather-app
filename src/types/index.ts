 export type optionType = {
    name: string
    lat: number
    lon: number
}

export type forecastType = {
    name: string
    country: string
    sunrise: number
    sunset: number 
    list: [{
        dt: number
        dt_txt: string
        main: {
            feels_like: number 
            humidity: number
            presssure: number
            temp: number 
            temp_max: number
            temp_min: number
        }
        weather: [
            {
                main: string
                icon: string 
                description: string

            }
        ]
        wind: {
            speed: number
            deg: number 
            gust: number
        }
        clouds: {
            all: number
        }
        pop: number 
        visibility: number
    }]
}
var cityName = localStorage.getItem('inputValue');

cityTitle.innerHTML = cityName;

// console.log(cityName)

const option = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e5a83a9567msh3063c1db3407808p1c154djsn3f61c3b330b5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const GetWeather = (city) => {
    return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, option)
        .then(response => response.json())
        .then((response) => {
            // console.log(response);
            // temp.innerHTML = response.temp
            document.getElementsByClassName("temp")[0].innerHTML = response.temp + "°C";
            document.getElementsByClassName("mintemp")[0].innerHTML = response.min_temp + "°C";
            document.getElementsByClassName("maxtemp")[0].innerHTML = response.max_temp + "°C";
            document.getElementsByClassName("feelslike")[0].innerHTML = response.feels_like + "°C";
            document.getElementsByClassName("sunrise")[0].innerHTML = response.sunrise;
            document.getElementsByClassName("sunset")[0].innerHTML = response.sunset;
            document.getElementsByClassName("humidity")[0].innerHTML = response.humidity + "%RH";
            document.getElementsByClassName("windspeed")[0].innerHTML = response.wind_speed + "m/s";
            document.getElementsByClassName("winddegrees")[0].innerHTML = response.wind_degrees + "°C";
            document.getElementsByClassName("cloudpct")[0].innerHTML = response.cloud_pct + "%";
        })
        .catch(err => console.error(err));
}

GetWeather(cityName);
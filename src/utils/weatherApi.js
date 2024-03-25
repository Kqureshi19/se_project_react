//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 44.34;
const longitude = 10.99;
const APIkey = "8f1fb9fb63d12cf2011e7c5c9be3d459";
export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    //console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  console.log(data);
  const main = data.main;
  const cityName = data.name;
  console.log(main);
  console.log(22222222222);
  console.log(cityName);
  const temperature = main && main.temp;
  console.log(Math.ceil(temperature));
  return Math.ceil(temperature);
};
//use state variable
//call functions in app.js
//pass state as a prop
export const WeatherCityData = (data) => {
  console.log(4444444444444444);
  console.log(data.name);
  // const res = {};
  // res.city = data.name;
  return data.name;

  // const main = data.main;
  // console.log(main);
  // console.log(22222222222);
  // const temperature = main && main.temp;
  // console.log(Math.ceil(temperature));
  // return Math.ceil(temperature);
};

/*const response = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10n",
    },
  ],
  base: "stations",
  main: {
    temp: 43.41,
    feels_like: 43.41,
    temp_min: 40.68,
    temp_max: 46.31,
    pressure: 1010,
    humidity: 96,
    sea_level: 1010,
    grnd_level: 924,
  },
  visibility: 3238,
  wind: {
    speed: 1.92,
    deg: 47,
    gust: 3.96,
  },
  rain: {
    "1h": 0.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1709065987,
  sys: {
    type: 2,
    id: 2004688,
    country: "IT",
    sunrise: 1709013490,
    sunset: 1709053197,
  },
  timezone: 3600,
  id: 3163858,
  name: "Zocca",
  cod: 200,
}; */

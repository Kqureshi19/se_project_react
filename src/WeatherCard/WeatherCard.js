//this array will contain all the different types of weather
const weatherOptions = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/night/ncloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/nsunny.svg").default,
    day: false,
    type: "moon",
  },
];

//we are passing in props
const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  //grab first element of the aray which is 0, and grab the url
  console.log(imageSrc[0].url);

  //if nothing comes back, return an emtpy string so application doesn't break
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>

      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;

import { weatherOptions } from "../../utils/constants";

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

      <img src={imageSrcUrl} alt="weather image" className="weather_image" />
    </section>
  );
};

export default WeatherCard;

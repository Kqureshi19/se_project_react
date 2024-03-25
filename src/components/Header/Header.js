import "./Header.css";
import Logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";
import { currentDate } from "../../utils/constants";
import { WeatherCityData } from "../../utils/weatherApi";

const Header = ({ onCreateModal, city }) => {
  console.log("Header");

  console.log(city);

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={Logo} alt="logo1" />
        </div>
        <div>
          {currentDate}, {city}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            {" "}
            + Add Clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          {" "}
          <img src={avatar} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;

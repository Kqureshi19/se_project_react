import "./Header.css";
import Logo from "../../images/Logo.svg";
import avatar from "../../images/avatar.svg";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={Logo} alt="logo1" />
        </div>
        <div>Date</div>
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

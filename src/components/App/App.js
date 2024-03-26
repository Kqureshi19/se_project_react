import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { useEffect } from "react";

function App() {
  const weatherTemp = 99;
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  //console.log(selectedCard);
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        //console.log(data);
        const temperature = parseWeatherData(data);

        console.log(temperature);

        setTemp(temperature);
        setCity(data.name);
      })
      .catch(console.error);
  }, []);
  console.log(temp);
  console.log(1);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} temp={temp} city={city} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garmet" onclose={handleCloseModal}>
          <label className="modal__label">
            Name
            <input
              type="text"
              name="name"
              minLength="1"
              maxLength={"30"}
              className="modal__form-input"
              placeholder="Name"
            />
          </label>
          <label>
            Image
            <input
              type="url"
              name="link"
              minLength="1"
              maxLength={"30"}
              className="modal__form-input"
              placeholder="Image URL"
            />
          </label>
          <legend className="modal__legend">Select the weather type:</legend>
          <div>
            <div className="modal_radio-buttons">
              <input type="radio" id="hot" name="weather" value="hot"></input>
              <label htmlFor="hot">Hot</label>
            </div>
            <div className="modal_radio-buttons">
              <input type="radio" id="warm" name="weather" value="warm"></input>

              <label htmlFor="warm">Warm</label>
            </div>
            <div className="modal_radio-buttons">
              <input type="radio" id="cold" name="weather" value="warm"></input>
              <label htmlFor="cold">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;

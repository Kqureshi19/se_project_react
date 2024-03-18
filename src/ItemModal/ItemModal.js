import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button type="button" className="modal__close-button" onClick={onClose}>
          {" "}
          {""} {""}{" "}
        </button>

        <img src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>Weather Type: {selectedCard.weather} </div>
      </div>
    </div>
  );
};

export default ItemModal;

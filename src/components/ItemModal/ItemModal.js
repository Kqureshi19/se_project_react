import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close-button modal__close-button_type_preview"
          onClick={onClose}
        >
          {" "}
          {""} {""}{" "}
        </button>

        <img className="modal__image" src={selectedCard.link} />
        <div className="modal__footer">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p>Weather Type: {selectedCard.weather} </p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;

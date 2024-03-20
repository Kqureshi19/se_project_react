import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onclose,
  name,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button type="button" className="modal__close-button" onClick={onclose}>
          {" "}
          {""} {""}{" "}
        </button>
        <h3 className="modal__form-title">{title}</h3>
        <form className="modal__form">
          <form>{children}</form>
          <button type="submit" className="modal__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

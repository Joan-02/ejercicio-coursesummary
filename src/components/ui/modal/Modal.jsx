import { Button } from "../../button/Button";
import "./Modal.css";

export const Modal = ({ variant = "" }) => {
  let modalTitle;
  let modalText;

  if (variant === "confirmation") {
    modalTitle = "Are you sure you want to complete this course?";
    modalText = (
      <>
        Make sure you have tagged all attenders. <br />
        Once you complete the course you will not be able to make changes.
      </>
    );
  }

  if (variant === "inputModal") {
    modalTitle = "Reason for cancellation";
    modalText = "Please provide the reason for cancelation of the seat";
  }

  if (variant === "") {
    // (Opcional) ¿Qué pasa si variant no es ninguna?
    modalTitle = "Error";
    modalText = "Variante desconocida";
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="title">{modalTitle}</p>
        <p className="text">{modalText}</p>
        {variant === "inputModal" ? (
          <input type="text" className="input-modal" placeholder="Text here" />
        ) : null}
        <div className="buttons-container">
          <Button text="No" variant="secondary" />
          <Button text="Yes" variant="primary" />
        </div>
      </div>
    </div>
  );
};

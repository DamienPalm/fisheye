import { closeModal } from "../utils/contactForm.js";

const render = () => {
  return `
    <div id="contact_modal">
    <div class="modal">
      <header>
        <h2>Contactez-moi</h2>
        <img src="./assets/icons/close.svg" id="closeButton">
      </header>
      <form>
        <div>
          <label>Prénom</label>
          <input />
        </div>
        <button class="contact_button">Envoyer</button>
      </form>
    </div>
  </div>
    `;
};

const event = () => {
  const closeModalButton = document.getElementById("closeButton");
  closeModalButton.addEventListener("click", closeModal);
};

export default {
  render,
  event,
};

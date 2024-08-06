import { closeModal } from "../utils/contactForm.js";

const render = (element) => {
  return `
    <div class="modalBackground" id="contactModal">
      <div class="modalBackground__modal">
        <header class="modalBackground__modal__header">
          <h2 class="modalBackground__modal__header__title">Contactez-moi ${element.name}</h2>
          <img class="modalBackground__modal__header__closeButton" src="./assets/icons/close.svg" id="closeButton">
        </header>
        <form action="#" method="post" class="modalBackground__modal__form" name="contact-me">
          <div class="modalBackground__modal__form__formData">
            <label class="modalBackground__modal__form__formData__label" for="firstName">Prénom</label>
            <input type="text" class="modalBackground__modal__form__formData__input" id="firstName" name="firstName">
          </div>
          <div class="modalBackground__modal__form__formData">
            <label class="modalBackground__modal__form__formData__label" for="lastName">Nom</label>
            <input type="text" class="modalBackground__modal__form__formData__input" id="lastName" name="lastName">
          </div>
          <div class="modalBackground__modal__form__formData">
            <label class="modalBackground__modal__form__formData__label" for="email">Email</label>
            <input type="email" class="modalBackground__modal__form__formData__input" id="email" name="email" autocomplete="off">
          </div>
          <div class="modalBackground__modal__form__formData">
            <label class="modalBackground__modal__form__formData__label" for="yourMessage">Votre message</label>
            <textarea class="modalBackground__modal__form__formData__textarea" id="yourMessage" name="yourMessage"></textarea>
          </div>
          <button class="modalBackground__modal__form__button">Envoyer</button>
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

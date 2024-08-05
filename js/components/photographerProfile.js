import { displayModal } from "../utils/contactForm.js";

const render = (element) => {
  return `
<section class="main__photographer-profile">
  <article class="main__photographer-profile__info">
    <h1 class="main__photographer-profile__info__name">
      ${element.name}
    </h1>
    <p class="main__photographer-profile__info__location">${element.city}, ${
    element.country
  }</p>
    <p class="main__photographer-profile__info__tagline">${element.tagline}</p>
  </article>
  <button class="main__photographer-profile__contact-button" id="modal-button" name="contact me">Contactez-moi</button>
  <img src="${
    element.portrait_thumbnail
      ? element.portrait_thumbnail
      : "../assets/photographers/account.png"
  }" alt="${element.name}" class="main__photographer-profile__photo">
</section>
`;
};

const event = () => {
  const openModalButton = document.getElementById("modal-button");
  openModalButton.addEventListener("click", displayModal);
};

export default {
  render,
  event,
};

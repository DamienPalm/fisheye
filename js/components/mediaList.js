const render = (element) => {
  return `
    <section class="main__media-section">
        <div class="main__media-section__order-by">
            <label class="main__media-section__order-by__label" for="order-by"><p class="main__media-section__order-by__label__text">Trier par</p></label>
            <select class="main__media-section__order-by__select" name="Order by" id="order-by">
                <option class="main__media-section__order-by__select__option" value="popularity">Popularité</option>
                <option class="main__media-section__order-by__select__option" value="date">Date</option>
                <option class="main__media-section__order-by__select__option" value="title">Titre</option>
            </select>
        </div>
        <section class="main__media-section__media-list">
         ${element
           .map(
             (element) => `
            <article class="main__media-section__media-list__card">
                <a class="main__media-section__media-list__card__head-card" href="#">
                ${
                  element.image && element.image.toLowerCase().endsWith(".webp")
                    ? `<img class="main__media-section__media-list__card__head-card__media" src="../assets/images/${element.photographerName}/${element.image}">`
                    : `<video class="main__media-section__media-list__card__head-card__media" autoplay loop>
                      <source src="../assets/images/${
                        element.photographerName
                      }/${element.video || element.image}" type="video/webm">`
                }
                </a>
                <div class="main__media-section__media-list__card__body-card">
                    <p class="main__media-section__media-list__card__body-card__title">${
                      element.title
                    }</p>
                    <p class="main__media-section__media-list__card__body-card__likes">
                        ${element.likes}
                        <i class="fa-solid fa-heart"></i>
                    </p>
                </div>
            </article>
            `
           )
           .join("")}
        </section>
  </section>
  `;
};

const event = () => {};

export default {
  render,
  event,
};

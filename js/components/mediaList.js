const render = (element) => {
  return `
    <section class="main__media-section">
        <div class="main__media-section__order-by">
            <label class="main__media-section__order-by__label" for="order-by">Trier par</label>
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
                    <img class="main__media-section__media-list__card__head-card__media" src="../assets/images/${element.photographerName}/${element.image}">
                </a>
                <div class="main__media-section__media-list__card__body-card">
                    <p class="main__media-section__media-list__card__body-card__title">${element.title}</p>
                    <p class="main__media-section__media-list__card__body-card__title">
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

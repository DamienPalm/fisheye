const render = (element) => {
  return `
    <article class="main__media-section__media-list__card">
        <a class="main__media-section__media-list__card__head-card" href="#">
        ${
          element.image && element.image.toLowerCase().endsWith(".webp")
            ? `<img class="main__media-section__media-list__card__head-card__media" src="../assets/images/${element.photographerName}/${element.image}">`
            : `<video class="main__media-section__media-list__card__head-card__media" autoplay loop>
              <source src="../assets/images/${element.photographerName}/${
                element.video || element.image
              }" type="video/webm">`
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
    `;
};

const event = () => {};

export default {
  render,
  event,
};

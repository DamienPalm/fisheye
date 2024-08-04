const render = (element) => {
  return `
    <article class="main__card">
      <a class="main__card__head-card" href="../photographer.html?id=${
        element.id
      }">
        <img src="${
          element.portrait_thumbnail
            ? element.portrait_thumbnail
            : "./assets/photographers/account.png"
        }" alt="${element.name}" class="main__card__head-card__photo">
        <h2 class="main__card__head-card__title">${element.name}</h2>
      </a>
      <div class="main__card__body-card">
        <p class="main__card__body-card__location">${element.city}, ${
    element.country
  }</p>
        <p class="main__card__body-card__tagline">${element.tagline}</p>
        <p class="main__card__body-card__price">${element.price}€/jour</p>
      </div>
    </article>
  `;
};

const event = () => {};

export default {
  render,
  event,
};

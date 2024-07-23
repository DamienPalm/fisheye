const render = (photographers) => {
  const main = document.createElement("main");
  main.classList.add("main");

  photographers.forEach((photographer) => {
    if (!photographer) {
      console.error("Données de photographe invalides:", photographer);
      return;
    }

    const cards = document.createElement("article");
    cards.classList.add("main__card");

    main.appendChild(cards);

    const link = document.createElement("a");
    link.classList.add("main__card__head-card");
    link.href = `../photographer.html?id=${photographer.id}`;
    link.setAttribute("name", photographer.name);

    cards.appendChild(link);

    const photo = document.createElement("img");
    if (!photographer.portrait_thumbnail) {
      photo.src = "../assets/photographers/account.png";
    } else {
      photo.src = photographer.portrait_thumbnail;
    }

    photo.alt = photographer.name;
    photo.classList.add("main__card__head-card__photo");

    const namePhotographer = document.createElement("h2");
    namePhotographer.classList.add("main__card__head-card__title");
    namePhotographer.textContent = photographer.name;

    link.appendChild(photo);
    link.appendChild(namePhotographer);

    const bodyCard = document.createElement("div");
    bodyCard.classList.add("main__card__body-card");

    cards.appendChild(bodyCard);

    const location = document.createElement("p");
    location.classList.add("main__card__body-card__location");
    location.textContent = `${photographer.city}, ${photographer.country}`;

    const tagline = document.createElement("p");
    tagline.classList.add("main__card__body-card__tagline");
    tagline.textContent = photographer.tagline;

    const price = document.createElement("p");
    price.classList.add("main__card__body-card__price");
    price.textContent = `${photographer.price}€/jour`;

    bodyCard.appendChild(location);
    bodyCard.appendChild(tagline);
    bodyCard.appendChild(price);
  });
  return main;
};

const event = () => {};

export default {
  render,
  event,
};

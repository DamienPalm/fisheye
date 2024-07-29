const render = (element, totalLikes) => {
  return `
    <div class="main__likes-section">
        <p class="main__likes-section__like-counter">${totalLikes}<i class="main__likes-section__like-counter__like fa-solid fa-heart"></i></p>
        <p class="main__likes-section__price">${element.price}€/jour</p>
    </div>
    `;
};

const event = () => {};

export default {
  render,
  event,
};

const render = () => {
  return `
    <div class="main__media-section__order-by">
        <label class="main__media-section__order-by__label" for="order-by"><p class="main__media-section__order-by__label__text">Trier par</p></label>
        <select class="main__media-section__order-by__select" name="Order by" id="order-by">
            <option class="main__media-section__order-by__select__option" value="popularity">Popularité</option>
            <option class="main__media-section__order-by__select__option" value="date">Date</option>                <option class="main__media-section__order-by__select__option" value="title">Titre</option>
        </select>
    </div>
    `;
};

const event = () => {};

export default {
  render,
  event,
};

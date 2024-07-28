const render = () => {
  return `
    <header class="header">
      <a href="./index.html" class="header__link">
        <img src="./assets/images/logo.png" alt="Fisheye Home page" class="header__link__logo">
      </a>
      <h1 class="header__title">Nos photographes</h1>
    </header>
  `;
};

const event = () => {};

export default {
  render,
  event,
};

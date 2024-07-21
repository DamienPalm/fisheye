const render = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const logo = document.createElement("img");
  logo.src = "./assets/images/logo.png";
  logo.alt = "Fisheye Home page";
  logo.height = 50;
  logo.classList.add("header__logo");

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("header__title");
  mainTitle.textContent = "Nos photographes";

  header.appendChild(logo);
  header.appendChild(mainTitle);

  return header.outerHTML;
};

const event = () => {};

export default {
  render,
  event,
};

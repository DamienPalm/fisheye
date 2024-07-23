const render = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const link = document.createElement("a");
  link.href = "./index.html";
  link.classList.add("header__link");

  const logo = document.createElement("img");
  logo.src = "./assets/images/logo.png";
  logo.alt = "Fisheye Home page";
  logo.height = 50;
  logo.classList.add("header__link__logo");

  link.appendChild(logo);
  header.appendChild(link);

  return header;
};

const event = () => {};

export default {
  render,
  event,
};

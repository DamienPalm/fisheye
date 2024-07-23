import Header from "../components/headerPhotographer.js";

const buildPage = () => {
  const headerContainer = document.querySelector(".header");
  const headerElement = Header.render();
  headerContainer.replaceWith(headerElement);
};

(() => {
  buildPage();
})();

import Header from "../components/header.js";

const buildPage = (element) => {
  element.innerHTML = `
        ${Header.render()}
    `;
};

(() => {
  const app = document.querySelector("#app");

  buildPage(app);
})();

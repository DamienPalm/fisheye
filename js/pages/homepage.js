import Header from "../components/headerHomepage.js";
import PhotographersList from "../components/photographersList.js";
import MediaList from "../components/mediaList.js";
import { fetchData as fetchPhotographers } from "../utils/fetchData.js";

const buildPage = async (photographers) => {
  const app = document.querySelector("#app");

  app.innerHTML = `
    ${Header.render()}

    ${PhotographersList.render(photographers)}
  `;
};

(async () => {
  try {
    const photographer = await fetchPhotographers();

    buildPage(photographer.photographers);
  } catch (error) {
    console.error("Erreur lors du chargement de la page:", error);
  }
})();

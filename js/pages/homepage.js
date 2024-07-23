import Header from "../components/header.js";
import Main from "../components/photographers.js";
import { fetchData } from "../utils/fetchData.js";

const buildPage = async () => {
  try {
    const data = await fetchData();
    console.log("Données récupérées:", data);
    if (!data || !data.photographers) {
      throw new Error(
        "Les données des photographes sont manquantes ou mal formatées"
      );
    }

    const headerContainer = document.querySelector(".header");
    const headerElement = Header.render();
    headerContainer.replaceWith(headerElement);

    const mainContainer = document.querySelector(".main");
    const mainElement = Main.render(data.photographers);
    mainContainer.replaceWith(mainElement);
  } catch (error) {
    console.error("Erreur lors du chargement de la page:", error);
  }
};

(() => {
  buildPage();
})();

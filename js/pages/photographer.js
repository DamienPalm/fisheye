import Header from "../components/headerPhotographer.js";
import PhotographerProfile from "../components/photographerProfile.js";
import MediaList from "../components/mediaList.js";
import LikePhotographer from "../components/likePhotographer.js";
import { getPhotographerbyId, getMedia } from "../utils/fetchData.js";
import { counterLikes } from "../utils/counterLike.js";

const buildPage = async (photographer, media, totalLikes) => {
  const app = document.querySelector("#app");

  app.innerHTML = `
      ${Header.render()}

      <main class="main">
      ${PhotographerProfile.render(photographer)}
      ${MediaList.render(media)}
      ${LikePhotographer.render(photographer, totalLikes)}
      </main>
    `;
};

const getPhotographerIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
};

(async () => {
  try {
    const photographerId = getPhotographerIdFromUrl();
    if (!photographerId) {
      throw new Error("ID du photographe non spécifié dans l'URL");
    }

    const photographer = await getPhotographerbyId(photographerId);
    const media = await getMedia(photographerId);
    const likes = counterLikes(media);

    console.log(media);
    console.log(photographer);
    console.log(likes);

    buildPage(photographer, media, likes);
  } catch (error) {
    console.error("Erreur lors du chargement de la page:", error);
  }
})();

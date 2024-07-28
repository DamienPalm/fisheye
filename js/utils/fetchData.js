export async function fetchData() {
  try {
    const response = await fetch("../data/photographers.json");

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données des photographes:",
      error
    );
    throw error;
  }
}

export async function getPhotographerbyId(id) {
  try {
    const data = await fetchData();
    const photographer = data.photographers.find(
      (photographer) => photographer.id === parseInt(id)
    );
    if (!photographer) {
      throw new Error(`Aucun photographe trouvé avec l'ID ${id}`);
    }
    return photographer;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données du photographe:",
      error
    );
    throw error;
  }
}

export async function getMedia(photographerId) {
  try {
    const data = await fetchData();
    const photographer = data.photographers.find(
      (photographer) => photographer.id === parseInt(photographerId)
    );
    const media = data.media
      .filter((media) => media.photographerId === parseInt(photographerId))
      .map((media) => {
        return { ...media, photographerName: photographer.name };
      });
    return media;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des médias du photographe:",
      error
    );
    throw error;
  }
}

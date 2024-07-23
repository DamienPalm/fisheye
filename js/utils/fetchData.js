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

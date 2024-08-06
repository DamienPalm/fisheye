export function displayModal() {
  const modal = document.getElementById("contactModal");
  modal.classList.add("active");
}

export function closeModal() {
  const modal = document.getElementById("contactModal");
  modal.classList.remove("active");
}

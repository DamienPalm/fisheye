const render = () => {
  return `
    <section class="filter-section">
      <h2>Trier par</h2>
      <div class="dropdown">
        <div class="select">
          <span class="selected">Popularité</span>
          <i class="fa-solid fa-chevron-down chevron-down"></i>
        </div>
        <ul class="menu">
          <li class="list active">Popularité</li>
          <li class="list">Date</li>
          <li class="list">Titre</li>
        </ul>
      </div>
    </section>
  `;
};

const event = () => {
  const select = document.querySelector(".select");
  const chevron = document.querySelector(".chevron-down");
  const menu = document.querySelector(".menu");
  const options = document.querySelectorAll(".list");
  const selected = document.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("selected-clicked");
    chevron.classList.toggle("chevron-rotate");
    menu.classList.toggle("open-menu");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("selected-clicked");
      chevron.classList.remove("chevron-rotate");
      menu.classList.remove("open-menu");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
};

export default {
  render,
  event,
};

const render = () => {
  return `
    <div id="contact_modal">
    <div class="modal">
      <header>
        <h2>Contactez-moi</h2>
        <img src="./assets/icons/close.svg" onclick="closeModal()" />
      </header>
      <form>
        <div>
          <label>Prénom</label>
          <input />
        </div>
        <button class="contact_button">Envoyer</button>
      </form>
    </div>
  </div>
    `;
};

const event = () => {};

export default {
  render,
  event,
};

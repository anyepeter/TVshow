import cards from './showList.js';

const body = document.querySelector('body');
const card = document.querySelector('.cards');
const pupo = document.createElement('section');
pupo.classList = 'comment-popup';
pupo.classList = 'active';

const showss = (man) => {
  const buttons = document.querySelectorAll('.comment-btn');
  buttons.forEach(async (items, index) => {
    items.addEventListener('click', async () => {
      const presentButton = man.find((sho) => sho.id === index + 1);
      card.classList.add('active');
      //  const pupo = document.querySelector('.popup')
      const content = `

    <div class="pop-card flex column">
      <div class="img-div flex">
        <img src="${presentButton.image.original}" alt="Movie flyer" class="pop-img">
        <i class="material-icons close">&#xe5c9;</i>
      </div>
      <div class="card_info flex column">
        <h2 class="movie-title" title="${presentButton.name}">${presentButton.name}</h2>
        <p class="summary">${presentButton.summary}</p>
      </div>
    </div>
     `;
      pupo.innerHTML = content;
      body.appendChild(pupo);
      pupo.classList.remove('active');
      const close = document.querySelector('.close');
      close.addEventListener('click', () => {
        pupo.classList.add('active');
        card.classList.remove('active');
      });
    });
  });
};
cards();
export default showss;

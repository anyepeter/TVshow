import './style.css';

const popper = document.querySelector('.pop_info');

const cards = (shows) => {
  const cards = document.querySelector('.cards');
  cards.innerHTML = '';
  shows.forEach((show) => {
    const inner = `
        <li class="show-card" id="${show.id - 1}">
          <h2 class="show-name">${show.name}</h2>
          <img class="show-img" src="${show.image.original}" />
          <button class="comment-btn">Comment</button>
          <button class="reserve-btn">Reserve</button>
        </li>
      `;
    cards.innerHTML += inner;
  });
};

const modalCard = (show) => {
  popper.innerHTML = `
    <div class="pop-card flex column">
      <div class="img-div flex">
        <img src="${show.image.original}" alt="Movie flyer" class="pop-img">
        <i class="material-icons close">&#xe5c9;</i>
      </div>
      <div class="card_info flex column">
        <h2 class="movie-title" title="${show.name}">${show.name}</h2>
        <p class="summary">${show.summary}</p>
        <a href="${show.url}" class="url">Watch Now</a>
      </div>
    </div>
  `;
  document.querySelector('.close').addEventListener('click', () => {
    popper.style.display = 'none';
  });
};

const popInfo = (shows) => {
  const reservationBtn = document.querySelectorAll('.reserve-btn');
  reservationBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      popper.style.display = 'block';
      modalCard(shows[e.target.parentElement.id]);
    });
  });
};

const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const jsonObj = await response.json();
  const result = jsonObj.slice(0, 12);
  cards(result);
  popInfo(result);
};

document.addEventListener('DOMContentLoaded', getShows);

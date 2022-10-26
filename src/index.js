import './style.css';
import modalCard from '../modules/popper.js';

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

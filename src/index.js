import './style.css';

const cards = (shows) => {
  const cards = document.querySelector('.cards');
  cards.innerHTML = '';
  shows.forEach((show) => {
    const inner = `
        <li class = "show-card">
          <h2 class = "show-name">${show.name}</h2>
          <img class= "show-img" src="${show.image.original}" />
          <button class="comment-btn">Comment</button>
          <button class="reserve-btn">Reserve</button>
        </li>
      `;
    cards.innerHTML += inner;
  });
};

const getShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const jsonObj = await response.json();
  const result = jsonObj.slice(0, 12);
  cards(result);
};

document.addEventListener('DOMContentLoaded', getShows);

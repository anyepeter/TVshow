import "./style.css";

const cards = (shows) => {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  shows.forEach((show) => {
    const inner = `
        <li class = "show-card">
          <p class = "show-name">${show.name}</p>
          <img class= "show-img" src="${show.image.original}" />
        </li>
      `;
    cards.innerHTML += inner;
  });
};

const getShows = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");
  const jsonObj = await response.json();
  const result = jsonObj.slice(0, 10);
  cards(result);
};

document.addEventListener("DOMContentLoaded", getShows);

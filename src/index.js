import './style.css';
import modalCard from '../modules/popper.js';
import commentItems from '../modules/commentPopup.js';
import cards from '../modules/showList.js';

const popper = document.querySelector('.pop_info');

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
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tusUKotsqFxCymui6qpz/likes')
    .then((res) => res.json())
    .then((data) => {
      cards(result, data);
    });

  popInfo(result);
  commentItems(result);
};

document.addEventListener('DOMContentLoaded', getShows);

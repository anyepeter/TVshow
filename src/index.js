import './style.css';
import modalCard from '../modules/popper.js';
import showss from '../modules/commentPopup.js';
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
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tusUKotsqFxCymui6qpz/likes')
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    cards(result, data);
  });
  
  popInfo(result);
  showss(result);
};
const uniqueID = 'tusUKotsqFxCymui6qpz';

const postLikes = async (id) => {
  const data = {
    item_id: id,
  };
  const post = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tusUKotsqFxCymui6qpz/likes', post);
}


document.addEventListener('DOMContentLoaded', getShows);

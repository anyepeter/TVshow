import ReservationApi from './reserve_api.js';

const modalCard = (show) => {
  const popper = document.querySelector('.pop_info');
  popper.innerHTML = `
    <div id="TVShow_id_${show.id}" class="pop-card flex column">
      <div class="img-div flex">
        <img src="${show.image.original}" alt="Movie flyer" class="pop-img">
        <i class="material-icons close">&#xe5c9;</i>
      </div>
      <div class="card_info flex column">
        <h2 class="movie-title" title="${show.name}">${show.name}</h2>
        <p class="summary">${show.summary}</p>
      </div>
      <div class="flex column res-div">
        <h3 class="sub">Reservations <span class="tint">0</span></h3>
        <ul class="list">
          <!-- contents for reservation lists -->
        </ul>
      </div>
      <form action="#" id="reservation_form" class="form flex column">
        <h3 class="sub">Add a reservation</h3>
        <input type="text" class="name" placeholder="Your name" required>
        <input type="date" title="Start date" class="start_date" placeholder="Start date" required>
        <input type="date" title="End date" class="end_date" placeholder="End date">
        <button type="submit" class="url">Reserve</button>
      </form>
    </div>
  `;
  document.querySelector('.close').addEventListener('click', () => {
    popper.style.display = 'none';
  });
  document.querySelector('#reservation_form').addEventListener('submit', (e) => {
    e.preventDefault();
    ReservationApi.getInputs(e.target.parentElement.id);

    ReservationApi.getApi(e.target.parentElement.id)
      .then((res) => res.json())
      .then((data) => ReservationApi.updateDOM(data));
  });
};

export default modalCard;
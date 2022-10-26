const modalCard = (show) => {
  const popper = document.querySelector('.pop_info');
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

export default modalCard;
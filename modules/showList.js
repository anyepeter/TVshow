const card = document.querySelector('.cards');
const cards = async (shows) => {
  card.innerHTML = '';
  let inner = '';
  shows.forEach((show, index) => {
    inner += `
        <li class = "show-card" id="${show.id - 1}" >
          <h2 class = "show-name">${show.name}</h2>
          <img class= "show-img" src="${show.image.original}" />
          <button data-id=${index} class="comment-btn">Comment</button>
          <button class="reserve-btn">Reserve</button>
        </li>
      `;
  });
  card.innerHTML = inner;
};

export default cards;
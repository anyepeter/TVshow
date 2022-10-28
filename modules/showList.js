/* eslint-disable */
const card = document.querySelector('.cards');
const cards = async (shows, likesss) => {
  card.innerHTML = '';
  let inner = '';
  shows.forEach((show, index) => {
    inner += `
        <li class = "show-card" id="${show.id - 1}" >
          <h2 class = "show-name">${show.name}</h2>
          <span class = "likes">
          ${likesss[index].likes} Likes</span>
          <button class="like-btn">👍</button>
          <img class= "show-img" src="${show.image.original}" />
          <button data-id=${index} class="comment-btn">Comment</button>
          <button class="reserve-btn">Reserve</button>
        </li>
      `;
  });
  card.innerHTML = inner;
  const addLikes = document.querySelectorAll('.like-btn');
  addLikes.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      postLikes(likesss[index].item_id);
      thumb.previousElementSibling.textContent = `${likesss[index].likes + 1}` + ' Likes';
    });
  });
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
    await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tusUKotsqFxCymui6qpz/likes',
      post,
    );
  };
};

export default cards;

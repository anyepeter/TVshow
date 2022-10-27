const card = document.querySelector(".cards");
const cards = async (shows, likesss) => {
  likesss = likesss.sort((a, b) => 
     a.item_id - b.item_id
  );
  card.innerHTML = "";
  let inner = "";
  shows.forEach((show, index) => {
    inner += `
        <li class = "show-card" id="${show.id - 1}" >
          <h2 class = "show-name">${show.name}</h2>
          <span class = "likes">
          ${likesss[index].likes} Likes</span>
          <span><button>👍</button></span>
          <img class= "show-img" src="${show.image.original}" />
          <button data-id=${index} class="comment-btn">Comment</button>
          <button class="reserve-btn">Reserve</button>
        </li>
      `;
    console.log(likesss[index].item_id);
    //console.log((likesss.item_id===index)?likesss[index].likes:false);
  });
  card.innerHTML = inner;
};

export default cards;

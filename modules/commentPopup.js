/* eslint-disable */
import cards from './showList.js';

const card = document.querySelector('.main');
const commentEl = document.querySelector('.comment-popup');

const commentItems = (commentObject) => {
  const buttons = document.querySelectorAll('.comment-btn');
  buttons.forEach(async (items, index) => {
    items.addEventListener('click', async () => {
      const presentButton = commentObject.find((sho) => sho.id === index + 1);
      card.classList.add('active');
      
      const content = `

    <div class="comment-section">
    <i class="bi bi-x-lg closeBtn"></i>
      <div class="image-section">
        <img src="${presentButton.image.original}" alt="Movie flyer">
      </div>
      <div class="description-section">
        <h2 >${presentButton.name}</h2>
        <p class="summary">${presentButton.summary}</p>
      </div>
      <p class="comment-title">Comments(<span id="commentSection">0</span>)</p>
      <ul id="comment-container" class="comment-container">
      </ul>
      <form class="form-comment">
             <p>
             <input type="text" id="username" placeholder="Enter user name">
             </p>
             <p>
             <input class="textarea" type="text" id="message" placeholder="Enter your comments">
             </p>
             <p><button type="submit">Submit</button></p>
             <span id="error"></span>
      </form>
    </div>
     `;
      commentEl.innerHTML = content;
      commentEl.classList.remove('active');
      const close = document.querySelector('.closeBtn');
      close.addEventListener('click', () => {
        commentEl.classList.add('active');
        card.classList.remove('active');
      });
      const user = document.getElementById('username');
      const message = document.getElementById('message');
      const form = document.querySelector('form');
      const errorMsg = document.getElementById('error');
      const id = index + 1;

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernames = user.value;
        const comments = message.value;

        if (usernames === '' || comments === '') {
          errorMsg.innerHTML = 'Please enter your username';
          setTimeout(() => {
            errorMsg.innerHTML = ' ';
          }, 2000);
        } else {
          
        try {
          const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OBkwF2aqUCliQK0tc1AI/comments';

          fetch(api, {
            method: 'POST',
            body: JSON.stringify({
              item_id: id,
              username: usernames,
              comment: comments,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(response);
          }).then((data) => data);
        } catch (error) {
          return error;
        }

        form.reset();
        setTimeout(() => {
          ShowPopup(id);
        }, 1000);

      };
      });
    
      const container = document.querySelector('#comment-container');
      const ShowPopup = async (id) => {
        await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OBkwF2aqUCliQK0tc1AI/comments?item_id=${id}`).then((response) => response.json()).then((data) => {
          let markup = '';
          data.forEach((elem, index) => {
            markup += `
          <li style="background-color: ${index % 2 && 'rgb(191, 4, 23)'}">
          <p>${elem.creation_date}:</p>
          <h3>${elem.username}</h3>
          <p>" ${elem.comment} ".</p>
          </li>
          `;
          });
          container.innerHTML = markup;

          const commentEl = document.getElementById('commentSection');
          const comentCount = (data) => {
            commentEl.innerHTML = data.length;
          };
          comentCount(data);
        });
      };

      ShowPopup(id);
    });
  });
}

cards();

export default commentItems;

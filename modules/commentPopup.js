/* eslint-disable */
import cards from './showList.js';

const body = document.querySelector('body');
const card = document.querySelector('.cards');
const pupo = document.createElement('section');
pupo.classList = 'comment-popup';
pupo.classList = 'active';

const showss = (man) => {
  const buttons = document.querySelectorAll('.comment-btn');
  buttons.forEach(async (items, index) => {
    items.addEventListener('click', async () => {
      const presentButton = man.find((sho) => sho.id === index + 1);
      card.classList.add('active');
      //  const pupo = document.querySelector('.popup')
      const content = `

    <div class="pop-card flex column">
      <div class="img-div flex">
        <img src="${presentButton.image.original}" alt="Movie flyer" class="pop-img">
        <i class="material-icons close">&#xe5c9;</i>
      </div>
      <div class="card_info flex column">
        <h2 class="movie-title" title="${presentButton.name}">${presentButton.name}</h2>
        <p class="summary">${presentButton.summary}</p>
      </div>
      <p>Comment(<span id="commentSection">0</span>)</p>
      <ul id="comment-container">
      </ul>
      <form>
             <p>User Name
             <input type="text" id="username" placeholder="Enter user name">
             </p>
             <p>User Name
             <input type="text" id="message" placeholder="Enter your comments">
             </p>
             <button type="submit">Click</button>
             <span id="error"></span>
      </form>
    </div>
     `;
      pupo.innerHTML = content;
      body.appendChild(pupo);
      pupo.classList.remove('active');
      const close = document.querySelector('.close');
      close.addEventListener('click', () => {
        pupo.classList.add('active');
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
        }

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
          showwpop(id);
        }, 1000);
      });

      const container = document.querySelector('#comment-container');
      const showwpop = async (id) => {
        await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OBkwF2aqUCliQK0tc1AI/comments?item_id=${id}`).then((response) => response.json()).then((data) => {
          let markup = '';
          data.forEach((elem) => {
            markup += `
          <li>
          <p>${elem.creation_date}</p>
          <P>${elem.username}</P>
          <p>${elem.comment}</p>
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

      showwpop(id);
    });
  });
};
cards();

export default showss;

import sendApi from './sendApi.js';
const counter = require('./reservation_counter.js');

// Helper funtion that itemize reserved dates and other info
const displayViews = async (book) => {
  const going = document.querySelector('.list');
  going.innerHTML = '';
  if (book.length >= 2) {
    book.forEach((viewing) => {
      going.innerHTML += `
        <li>${viewing.date_start} - ${viewing.date_end} by ${viewing.username}</li>
      `;
    });
  } else {
    going.innerHTML += `<li>${book[0].date_start} - ${book[0].date_end} by ${book[0].username}</li>`;
  }
  return going;
};

/* eslint-disable camelcase */
class ReservationApi {
  static getApi = async (id) => {
    let booked;
    try {
      booked = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S8jUmAbkqmXOnp8cwdYb/reservations?item_id=${id}`);
    } catch {
      booked = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S8jUmAbkqmXOnp8cwdYb/reservations?item_id=${id}`);
    }
    return booked;
  };

  // Get inputs from users and send to BaseURL
  static getInputs = (event_id) => {
    // eslint-disable-next-line camelcase
    const item_id = event_id;
    const username = document.querySelector('.name').value;
    const date_start = document.querySelector('.start_date').value;
    const date_end = document.querySelector('.end_date').value;
    const visitor = {
      item_id,
      username,
      date_start,
      date_end,
    };

    sendApi('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S8jUmAbkqmXOnp8cwdYb/reservations/', visitor);
    document.querySelector('form').reset();
  };

  static updateDOM = async (packet) => {
    const viewers = counter(packet);
    displayViews(packet);
    document.querySelector('.tint').innerHTML = await viewers;
  }
}

export default ReservationApi;

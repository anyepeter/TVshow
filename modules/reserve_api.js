import sendApi from './sendApi.js';

// Helper funtion that itemize reserved dates and other info
const displayViews = async (book) => {
  const going = document.querySelector('.list');
  if (book.length >= 2) {
    book.forEach((viewing) => {
      going.innerHTML += `
        <li>${viewing.date_start} - ${viewing.date_end} by ${viewing.username}</li>
      `;
    });
  } else {
    going.innerHTML += `<li>${book.date_start} - ${book.date_end} by ${book.username}</li>`;
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
    const counter = packet.length;
    setInterval(displayViews(packet), 2000);
    document.querySelector('.tint').innerHTML = await counter;
  }
}

export default ReservationApi;
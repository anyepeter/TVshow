import sendApi from './sendApi.js';

// Helper funtion that itemize reserved dates and other info
const displayViews = (book) => {
  const going = document.querySelector('.list');
  if (book.length > 1) {
    book.forEach((viewing) => {
      going.innerHTML += `
        <li>${viewing.date_start} - ${viewing.date_end} by ${viewing.username}</li>
      `;
    });
  } else {
    going.innerHTML += `
    <li>${book.date_start} - ${book.date_end} by ${book.username}</li>
  `;
  }
  return going;
};

/* eslint-disable camelcase */
class ReservationApi {
  static getApi = async (id) => {
    const booked = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5zFxK869JkpdF8DXWL2N/reservations?item_id=${id}`);
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

    sendApi('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5zFxK869JkpdF8DXWL2N/reservations/', visitor);
    document.querySelector('form').reset();
  };

  static updateDOM = (packet) => {
    const counter = packet.length;
    displayViews(packet);
    document.querySelector('.tint').innerHTML += counter;
  }
}

export default ReservationApi;
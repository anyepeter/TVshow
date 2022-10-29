const sendApi = async (baseURL, client) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(client),
  });
  return response;
};

export default sendApi;

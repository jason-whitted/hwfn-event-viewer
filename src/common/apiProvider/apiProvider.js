const apiProvider = ({ url, method = 'GET', data = null, ...other }) => {
  const options = {
    method,
    body: data ? JSON.stringify(data) : null,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
    ...other,
  };

  return fetch(url, options)
    .then(resp => {
      const { status, statusText } = resp;
      if (status >= 400) {
        throw new Error(`${status} - ${statusText}`);
      }
      return resp.json();
    });
};

export default apiProvider;

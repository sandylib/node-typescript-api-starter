

const request = async (url, options) => {
  const headers = {
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  };

  const requestOptions = {
    ...options,
    ...headers
  }
  const resp = await fetch(url,requestOptions);
  return resp;

}

export default request;
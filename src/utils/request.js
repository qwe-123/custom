import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
function parseErrorMessage({ data }) {
  const { status, message } = data;
  if (status === 'error') {
    throw new Error(message);
  } else {
    throw new Error('调用接口出错')
  }
  return { data };
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  if(options.method==='GET'){
    return fetch(url+'?'+options.data, {
      method: options.method,
    })
      .then((response) => {
        return response.text();
      })
      .then(data => ({ data }))
      .catch(err => (parseErrorMessage({ err })));
  } else {
    let params;
    if(options.widthNoHeader){
      if(options.widthNoHeader === "application/json"){
        params={
          method: options.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: options.data,
        }
      }else{
        params={
          method: options.method,
          body: options.data,
          credentials: 'include'
        }
      }
    } else {
      params= {
        method: options.method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: options.data,
        credentials: 'include'
      }
    }
    return fetch(url, params)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => ({ data }))
      .catch(err => (parseErrorMessage({ err })));
  }
}

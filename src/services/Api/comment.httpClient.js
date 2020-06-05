const url = 'http://localhost:4000/api/v1/comment';

const post = async (body = {}) => {
    const res = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(body),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                }
    });
    const data = await res.json();
    return data;
  }

  const get = async (id) => {
    const res = await fetch(`${url}/${id}`, {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                }
    });
    const data = await res.json();
    return data;
  }
  
  
  export default {
    post,
    get
  }
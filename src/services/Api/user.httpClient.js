const url = 'http://localhost:4000/api/v1/user/';


const getAll = async () => {
  const res = await fetch(url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
  });
  const data = await res.json();
  return data;
}

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

const put = async (body = {}, user) => {
  const res = await fetch(`${url}/${user.uid}`, {
              method: 'PUT',
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

export default {
  getAll,
  post,
  put
}
const url = 'http://localhost:4000/api/v1/complaint';

const getAll = async () => {
  const res = await fetch(url, {
              method: 'GET',
              mode: 'cors',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
  });
  const data = await res.json();
  return data;
}

const getId = async (id) => {
  const res = await fetch(`${url}/${id}`, {
              method: 'GET',
              mode: 'cors',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
  });
  const data = await res.json();
  return data;
}

const getUserId = async (user) => {
  const res = await fetch(`${url}/?userid=${user.uid}`, {
              method: 'GET',
              mode: 'cors',
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

const deleteId = async (id) => {
  const res = await fetch(`${url}/${id}`, {
              method: 'DELETE',
              mode: 'cors',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
  });
  const data = await res.json();
  return data;
}

//actualiza solo el voto de la denuncia
const put = async (id) => {
  const res = await fetch(`${url}/${id}/upvote`, {
              method: 'PUT',
              mode: 'cors',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
  });
  const data = await res.json();
  return data;
}

//http://localhost:4000/api/v1/complaint/?lat=-31.4312&lng=-64.1920
const getLocation = async (lat, lng) => {
  const res = await fetch(`${url}/?lat=${lat}&lng=${lng}`, {
              method: 'GET',
              mode: 'cors',
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
  getId,
  post,
  getUserId,
  deleteId,
  put,
  getLocation
}
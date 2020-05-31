const url = 'http://localhost:4000/api/v1/typework';

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

export default {
  getAll,
}
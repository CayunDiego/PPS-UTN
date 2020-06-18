const url = 'http://localhost:4000/api/v1/votescomment';

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

const getUserId = async (user) => {
    const res = await fetch(`${url}/${user.uid}`, {
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
  post,
  getUserId
}
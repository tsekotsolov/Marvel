const requester = {
  signIn: (data) => {
    return fetch(
      'https://marveltest.eu.auth0.com/dbconnections/signup',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ client_id: 'CpDbnN3C4h56IEGNpuKKvoueTSLORJl4',
          email: data.email,
          password: data.password,
          connection: 'Username-Password-Authentication'
        })
      }
    ).then(response => response.json())
  },

  fetchAllCharacters: (offset) => {
    return fetch(
      `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&apikey=a5a9a5c29885db559237f9ce40d2cac1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
  }
}

export default requester

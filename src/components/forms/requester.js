let requester = {
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
  }
}

export default requester

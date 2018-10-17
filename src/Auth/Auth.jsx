import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'marveltest.eu.auth0.com',
    clientID: 'CpDbnN3C4h56IEGNpuKKvoueTSLORJl4',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
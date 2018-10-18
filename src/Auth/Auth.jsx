import auth0 from 'auth0-js';


export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'marveltest.eu.auth0.com',
    clientID: 'CpDbnN3C4h56IEGNpuKKvoueTSLORJl4',
    redirectUri: 'http://localhost:3000/characters',
    responseType: 'token id_token',
    scope: 'openid'
  });

  signup = (email, password) => {
      this.auth0.signup(
        {connection: 'Username-Password-Authentication', email, password}, 
        (err,response) => {
           
          if(err){
              console.log(err)
              return
            }
            console.log(response);
      });
  }

  login = (email,password)=> {
    this.auth0.redirect.loginWithCredentials(
      {
      connection:'Username-Password-Authentication', 
      email, 
      password, 
      scope: 'openid email profile'
      },
      (err, authResult) => {
        console.log(authResult)
          if (err) {
              console.log(err);
              return;
          }
      }
    );  
  }

  userInfo = {}


  handleAuthentication = (history) => {
    this.auth0.parseHash((err, authResult) => {

      if (authResult && authResult.accessToken && authResult.idToken) {

        let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        history.replace('/characters')

      } else if (err) {
        history.replace('/characters')
        console.log(err);
      }
    });
  }

  getProfile = (callback) => {

    let accessToken = localStorage.getItem('access_token')
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if(err){
        console.log(err)
        return
      }
      this.userInfo=profile
      localStorage.setItem('profilePicture', profile.picture);
    });
  }
}
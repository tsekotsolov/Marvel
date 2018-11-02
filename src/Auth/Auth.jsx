import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "marveltest.eu.auth0.com",
    clientID: "CpDbnN3C4h56IEGNpuKKvoueTSLORJl4",
    redirectUri: "http://localhost:3000/characters",
    responseType: "token id_token",
    scope: "openid"
  });

  signup = (email, password) => {
    this.auth0.signup(
      { connection: "Username-Password-Authentication", email, password },
      (err, response) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(response);
      }
    );
  };

  login = (email, password) => {
    this.auth0.redirect.loginWithCredentials(
      {
        connection: "Username-Password-Authentication",
        email,
        password,
        scope: "openid email profile"
      },
      (err, authResult) => {
        console.log(authResult);
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  };

  handleAuthentication = history => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult) {
          let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
          );
          localStorage.setItem("access_token", authResult.accessToken);
          localStorage.setItem("id_token", authResult.idToken);
          localStorage.setItem("expires_at", expiresAt);
          localStorage.setItem(
            "profilePicture",
            authResult.idTokenPayload.picture
          );
          localStorage.setItem("email", authResult.idTokenPayload.email);
          localStorage.setItem("nickname", authResult.idTokenPayload.nickname);
          history.replace("/characters");
          resolve(authResult);
        } else if (err) {
          history.replace("/characters");
          reject(err);
        }
      });
    });
  };

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  // getProfile = () => {
  //   return new Promise((resolve, reject) => {
  //     let accessToken = localStorage.getItem('access_token')
  //     this.auth0.client.userInfo(accessToken, (err, profile) => {
  //       if(err){
  //         console.log(err)
  //         reject(err)
  //         return
  //       }
  //       resolve(profile);
  //       localStorage.setItem('profilePicture', profile.picture)
  //       localStorage.setItem('email',profile.email)
  //       localStorage.setItem('nickname',profile.nickname)
  //     })
  //   })
  // }
}

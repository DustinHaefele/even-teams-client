import config from '../config';

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken(){
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken(){
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },

  getUserIdFromToken() {
    const token = this.getAuthToken();
    console.log(token);
    const codedUser = token.split('.')[1];
    console.log(codedUser)
    
    const payload = window.atob(codedUser)
    const parsedPayload = JSON.parse(payload) 
        console.log(payload);
        console.log(parsedPayload);

    return parsedPayload.user_id;

  }

}

export default TokenService;
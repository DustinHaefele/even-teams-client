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
    return !!TokenService.getAuthToken();
  },
//These next two functions allow us to grab the user_id and user_name
//from token for use in display and navigation.
  getUserIdFromToken() {
    const token = this.getAuthToken();
    const codedUser = token.split('.')[1];
    const payload = window.atob(codedUser)
    const parsedPayload = JSON.parse(payload) 
    return parsedPayload.user_id;
  },

  getUserNameFromToken() {
    const token = this.getAuthToken();
    const codedUser = token.split('.')[1];
    const payload = window.atob(codedUser)
    const parsedPayload = JSON.parse(payload) 
    return parsedPayload.sub;
  },

}

export default TokenService;
import config from '../config';
import TokenService from './token-services';

const groupApiService = {
  getGroupsByUserId(user_id) {
    return fetch(`${config.API_ENDPOINT}/groups/users/${user_id}`,{
      headers: {
        "content-type": "application/json",
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
    }).then(res =>{
      if(!res.ok) {
        return res.json().then(e=>Promise.reject(e))
      }
      return res.json();
    })
  }
}

export default groupApiService;
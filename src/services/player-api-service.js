import config from '../config';
import TokenService from '../services/token-services';

const playerApiService = {
  getPlayersByGroupId(group_id) {
    return fetch(`${config.API_ENDPOINT}/players/${group_id}`,{
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res =>{
      if(!res.ok){
        return res.json().then(e=>Promise.reject(e))
      }
      return res.json();
    })
  },
}

export default playerApiService;
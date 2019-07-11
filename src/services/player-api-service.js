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

  addPlayerToGroup(player) {
    return fetch(`${config.API_ENDPOINT}/players`,{
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body:  JSON.stringify(player),
    })
    .then(res=>{
      if(!res.ok){
        return res.json().then(e=>Promise.reject(e))
      }
      return res.json();
    });
  },

  deletePlayerFromGroup(group_id, player_id) {
    return fetch(`${config.API_ENDPOINT}/players/${group_id}/${player_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
    })
      .then(res=>{
      if(!res.ok){
        return res.json().then(e=>Promise.reject(e))
      }
      return null;
    });
  },
}

export default playerApiService;
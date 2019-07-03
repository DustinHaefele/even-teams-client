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
  },

  insertGroup(group){
    return fetch(`${config.API_ENDPOINT}/groups`,{
      method: 'POST',
      headers:{
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(group),
    })
    .then(res=>{
      if(!res.ok){
        return res.json().then(e=>Promise.reject(e))
      }
      return res.json();
    });
  }
}

export default groupApiService;
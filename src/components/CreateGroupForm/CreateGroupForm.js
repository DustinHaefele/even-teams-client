import React from 'react';
import config from '../../config';
import TokenService from '../../services/token-services';

export default class CreateGroupForm extends React.Component {

  state = {
    error: null,
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const {group_name} = ev.target
    // defaulting adding group to the first user until I can pass the user down to this component
    const group = {group_name: group_name.value, user_id: 1 };

    fetch(`${config.API_ENDPOINT}/groups`,{
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
    }).then(()=>{
      group_name.value = '';
    }).catch(res =>{
      this.setState({
        error:res.error
      })
    })

  }
  

  render() {
   return ( 
   <form onSubmit={this.handleSubmit}>
     <label htmlFor='group_name'>Group Name: </label>
     <input required className ='group-input' name='group_name' placeholder='Group Name' />
     <button type='submit'>Create Group</button>
    </form>
    );
  };
};
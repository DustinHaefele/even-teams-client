import React from 'react';
import config from '../../config';

export default class UserSearch extends React.Component {

  handleSearch = searchTerm => {
    return fetch(`${config.API_ENDPOINT}/users/user_name`, {method: 'GET', body: JSON.stringify({searchTerm})})
      .then(res => {
        if(!res.ok) {
          return res.json().then(e=> Promise.reject(e))
        }
        return res.json();
      })
      //need to look at this exact data and then render a list of users found.  Also need to post the user to the group
  }

  render(){

    return (
      <form onSubmit={this.handleSearch}>
        <input type='text' placeholder='Search Here' /> 
        <button type='submit'>Search</button>
      </form>
    )
  }
}
import React from 'react';
import config from '../../config';
import PlayerApiService from '../../services/player-api-service';

export default class UserSearch extends React.Component {

  handleSearch = ev => {
    ev.preventDefault();
    const { search_term } = ev.target;
    console.log(search_term.value);
     return PlayerApiService
      .findUserByName(search_term.value).then(res=>console.log(res));
      //need to look at this exact data and then render a list of users found.  Also need to post the user to the group
  }

  render(){

    return (
      <form className='player-form' onSubmit={this.handleSearch}>
        <input type='text' id='search_term' name='search_term' placeholder='Search Here' /> 
        <button type='submit'>Search</button>
      </form>
    )
  }
}
import React from 'react';
import config from '../../config';
import PlayerApiService from '../../services/player-api-service';

export default class UserSearch extends React.Component {

  state = {
    usersFound: [],
  }

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
        <h3>Find Another User</h3>
        <div className="form-input-section">
          <input className="player_name" type='text' id='search_term' name='search_term' placeholder='Search Here' /> 
        </div>
        <button type='submit' className="button first-button">Search For User</button>
        <button onClick={this.props.toggleForm} className="button">
            Cancel
          </button>
      </form>
    )
  }
}
import React from 'react';
import UserList from '../UserList/UserList';
import PlayerApiService from '../../services/player-api-service';

export default class UserSearch extends React.Component {

  state = {
    usersFound: [],
  }

  handleSearch = ev => {
    ev.preventDefault();
    const { search_term } = ev.target;
     return PlayerApiService
      .findUserByName(search_term.value).then(res=>this.setState({usersFound: res}));
      //need to look at this exact data and then render a list of users found.  Also need to post the user to the group
  }

  renderUsersFound() {
    return (
      <UserList users={this.state.usersFound} toggleForm={this.props.toggleForm} addPlayer={this.props.addPlayer} group_id={this.props.group_id}/>
    )
  }

  render(){

    return (
      !this.state.usersFound.length ? (<form className='player-form' onSubmit={this.handleSearch}>
        <h3>Find Another User</h3>
        <div className="form-input-section">
          <input className="player_name" type='text' id='search_term' name='search_term' placeholder='Search Here' /> 
        </div>
        <button type='submit' className="button first-button">Search For User</button>
        <button onClick={()=>this.props.toggleForm()} className="button">
            Cancel
          </button>
      </form>) : (this.renderUsersFound())
    )
  }
}
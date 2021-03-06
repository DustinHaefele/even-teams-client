import React from 'react';
import playerApiService from '../../services/player-api-service';
import './UserListItem.css';

export default class UserListItem extends React.Component {

  state = {
    skill: 1,
  }
  
  handleAddUser = (player_name, player_skill, user_id) => {
    const player = {
      player_name,
      player_skill,
      user_id,
      group_id: this.props.group_id
    };

    playerApiService
      .addPlayerToGroup(player)
      .then(player => {
        this.props.addPlayer(player);
        this.props.toggleForm();
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });
  };

  handleSkillChange = ev => {
    this.setState({skill: ev.target.value}) 
  }

  render() {
    return (
      <li className="user-list-item">
        <div className="user-info-div">
          <p>{this.props.user.user_name}</p>
        </div>
        <div className="user-info-div">
          <p>{this.props.user.full_name}</p>
        </div>
          <div className="user-info-div">
            <select
              required
              className="player_skill"
              id="player_skill"
              name="player_skill"
              onChange={this.handleSkillChange}
            >
              <option value={1}>1 - worst</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5 - best</option>
            </select>
          </div>
          <div className="user-info-div">
            {' '}
            <button type="button" className="button first-button" onClick={()=> this.handleAddUser(this.props.user.full_name, this.state.skill, this.props.user.id)}>
              Add This User
            </button>
          </div>
      </li>
    );
  }
}

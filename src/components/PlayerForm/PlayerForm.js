import React from 'react';
import './PlayerForm.css';
import playerApiService from '../../services/player-api-service';

export default class PlayerForm extends React.Component {
  static defaultProps = {
    toggleForm: () => {},
    group_id: null
  };
  state = {
    error: null
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { player_name, player_skill } = ev.target;
    const player = {
      player_name: player_name.value,
      player_skill: player_skill.value,
      group_id: this.props.group_id,
    };

    playerApiService
      .addPlayerToGroup(player)
      .then(player => {
        player_name.value = '';
        player_skill.value = 1;
        this.props.addPlayer(player);
        this.props.toggleForm();
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });
  };

  render() {
    return (
        <form className="player-form" onSubmit={this.handleSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <h3>Add New Player</h3>
          <div className="form-input-section">
            <label htmlFor="player_name">New Player Name</label>
            <input
              required
              className="player_name"
              id="player_name"
              name="player_name"
              type="text"
              placeholder="New Player Name"
            />
          </div>
          <div className="form-input-section">
            <label htmlFor="player_skill">Skill Level</label>
            <select
              required
              className="player_skill"
              id="player_skill"
              name="player_skill"
            >
              <option value={1}>1 - worst</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5 - best</option>
            </select>
          </div>

          <button type="submit" className="button first-button">
            Add This Player
          </button>
          <button className="button">
            Add Even-Teams User
          </button>
          <button onClick={this.props.toggleForm} className="button">
            Cancel
          </button>
        </form>
    );
  }
}

import React from 'react';
import playerApiService from '../../services/player-api-service';
import PlayerForm from '../../components/PlayerForm/PlayerForm';
import SplitTeamsService from '../../services/split-teams-service';
import Teams from '../../components/Teams/Teams';
import './MakeTeamsPage.css';

export default class SingleGroupPage extends React.Component {
  state = {
    error: null,
    allPlayers: [],
    addPlayer: false,
    teamOne: [],
    teamTwo: []
  };

  toggleAddPlayer = () => {
    this.setState({ addPlayer: !this.state.addPlayer });
  };

  handleSplitTeams = () => {
    const teams = SplitTeamsService.handleCreateTeams(this.state.allPlayers);
    this.setState(teams);
  };

  componentDidMount() {
    const group_id = this.props.match.params.group_id;
    playerApiService
      .getPlayersByGroupId(group_id)
      .then(allPlayers => {
        this.setState({
          allPlayers
        });
      })
      .catch(error => this.setState({ error }));
  }

  addPlayer = newPlayer => {
    this.setState({
      allPlayers: [...this.state.allPlayers, newPlayer]
    });
    if (this.state.teamOne.length > 0) {
      this.handleSplitTeams();
    }
  };

  renderPlayersList = () => {
    const allPlayersArray = this.state.allPlayers.map(player => {
      return <li className='player' key={player.id}>{player.player_name}</li>;
    });
    return allPlayersArray;
  };

  render() {
    return (
      <div>
        {/*get the group name and put it here*/}
        <h2>My Group</h2>
        <section className='all-players-section'>
          <h3>All Players</h3>
          <ul className="all-players">{this.renderPlayersList()}</ul>
        </section>
        {this.state.teamOne.length > 0 && (
          <Teams teamOne={this.state.teamOne} teamTwo={this.state.teamTwo} />
        )}
        
        {this.state.addPlayer ? (
          <PlayerForm
            toggleForm={this.toggleAddPlayer}
            addPlayer={this.addPlayer}
            group_id={this.props.match.params.group_id}
          />
        ) : (
          <div className = 'team-button-div'>
            <button className='teams-page-buttons' onClick={this.toggleAddPlayer}>Add New Player</button>
            <button className='teams-page-buttons' onClick={this.handleSplitTeams}>Make Even Teams</button>
          </div>
        )}
        
      </div>
    );
  }
}

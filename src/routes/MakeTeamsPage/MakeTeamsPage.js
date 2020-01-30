import React from 'react';
import playerApiService from '../../services/player-api-service';
import PlayerForm from '../../components/PlayerForm/PlayerForm';
import SplitTeamsService from '../../services/split-teams-service';
import Teams from '../../components/Teams/Teams';
import './MakeTeamsPage.css';
import GroupApiService from '../../services/group-api-service';
import TokenService from '../../services/token-services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SingleGroupPage extends React.Component {
  state = {
    error: null,
    allPlayers: [],
    groupName: '',
    addPlayer: false,
    teamOne: [],
    teamTwo: []
  };

  toggleAddPlayer = () => {
    console.log('toggling')
    this.setState({ addPlayer: !this.state.addPlayer });
  };

  handleSplitTeams = () => {
    const teams = SplitTeamsService.handleCreateTeams(this.state.allPlayers);
    this.setState(teams);
  };

  handleClickDelete = id =>{
    const group_id = this.props.match.params.group_id;
    const remainingPlayers = this.state.allPlayers.filter(player => player.id !== id);
    playerApiService.deletePlayerFromGroup(group_id, id)
      .then(()=>{
        this.setState({
          allPlayers: remainingPlayers,
        })
      });
  }

  componentDidMount() {
    const group_id = this.props.match.params.group_id;
    playerApiService
      .getPlayersByGroupId(group_id)
      .then(players => {
        const allPlayers = players.map(player => { return {present: true, ...player}});
        this.setState({
          allPlayers
        });
      })
      .catch(err => this.setState({ error: err.error }));

    GroupApiService.getGroupNameFromGroupId(this.props.match.params.group_id).then(groupName => {
      this.setState({groupName})
    })
      
  }

  addPlayer = player => {
    console.log('adding player')
    const newPlayer = {present: true, ...player};
    this.setState({
      allPlayers: [...this.state.allPlayers, newPlayer]
    });
    if (this.state.teamOne.length > 0) {
      this.handleSplitTeams();
    }
  };

  togglePlayerPresent(idx) {
    const allPlayers = this.state.allPlayers;
    allPlayers[idx].present = !allPlayers[idx].present;
    this.setState({ allPlayers });
    if (this.state.teamOne.length > 0) {
      this.handleSplitTeams();
    }
  }

  renderPlayersList = () => {
    
    const allPlayersArray = this.state.allPlayers.map((player, idx) => {
      const className =  player.present ? "player" : "player red"
      return <li className={className} key={player.id} onClick={()=>this.togglePlayerPresent(idx)}><span>{player.player_name}</span> <button aria-label='delete icon' type='delete' className='icon-button' onClick={()=>this.handleClickDelete(player.id)}><FontAwesomeIcon  className='delete' icon='trash-alt' /></button></li>;
    });
    return allPlayersArray;
  };
  

  render() {
    return (
      <div>
        <h2 className='group-name'>{this.state.groupName}</h2>
        <section className='all-players-section'>
          <h3 className='all-players-header'>All Players</h3>
          <h4 className='all-players-subheader'>This is where you can use the group you created.  Add all the players you have and give them a skill level. Then just click the "make even teams" button and our algorithm will split the teams as evenly as mathmatically possible!  Later you can come back to this page and manage your group by deleting players or adding new ones!</h4>
          <ul className="all-players">{this.renderPlayersList()}</ul>
        </section>

        {this.state.addPlayer ? (
          <PlayerForm
            toggleForm={this.toggleAddPlayer}
            addPlayer={this.addPlayer}
            group_id={this.props.match.params.group_id}
          />
        ) :(<div className = 'team-button-div'>
              <button className='teams-page-buttons' onClick={this.toggleAddPlayer}>Add New Player</button>
              <button className='teams-page-buttons' onClick={this.handleSplitTeams}>Make Even Teams</button>
              <button className='teams-page-buttons' onClick={()=> this.props.history.push(`/groups/${TokenService.getUserIdFromToken()}`)}>Go Back To My Groups</button>
            </div>)
          }
          {this.state.teamOne.length > 0 && (
          <Teams teamOne={this.state.teamOne} teamTwo={this.state.teamTwo} />
        )}
      </div>
    );
  }
}

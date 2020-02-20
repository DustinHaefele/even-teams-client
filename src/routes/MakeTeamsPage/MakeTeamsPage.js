import React from 'react';
import playerApiService from '../../services/player-api-service';
import PlayerForm from '../../components/PlayerForm/PlayerForm';
import SplitTeamsService from '../../services/split-teams-service';
import Teams from '../../components/Teams/Teams';
import './MakeTeamsPage.css';
import groupApiService from '../../services/group-api-service';
import TokenService from '../../services/token-services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SingleGroupPage extends React.Component {
  state = {
    error: null,
    allPlayers: [],
    groupName: '',
    addPlayer: false,
    teamOne: [],
    teamTwo: [],
    group_id: this.props.match.params.group_id
  };

  //toggles a state change that either shows an add player form or hides it.
  toggleAddPlayer = () => {
    this.setState({ addPlayer: !this.state.addPlayer });
  };

  //Creates Even teams using the algorithm in handle create teams
  handleSplitTeams = () => {
    const teams = SplitTeamsService.handleCreateTeams(this.state.allPlayers);
    this.setState(teams);
  };

  //Splits teams in a completely random way
  handleMakeRandomTeams = () => {
    const teams = SplitTeamsService.handleCreateRandomTeams(
      this.state.allPlayers
    )
    this.setState(teams);
  };

  //Deletes a player from the group
  handleClickDelete = id => {
    //creates an array of all the players except the deleted one
    const remainingPlayers = this.state.allPlayers.filter(
      player => player.id !== id
    );
    
    //makes a delete call to the API to remove the player from the database as well
    playerApiService.deletePlayerFromGroup(this.state.group_id, id).then(() => {
      this.setState({
        allPlayers: remainingPlayers
      });
    });
  };

  //Adds a present property to each player in the array and sets it as true.
  //added this so that we can mark players as not being present without removing them from the database
  markAllPresent = players => {
    let allPlayersPresent = players.map(player => {return {present: true, ...player}});
    this.setState({allPlayers: allPlayersPresent});
}

  componentDidMount() {
    //Based on the group id we are making an API call to get all the players in that group
    playerApiService
      .getPlayersByGroupId(this.state.group_id)
      .then(players => {
        this.markAllPresent(players);
      })
      .catch(err => this.setState({ error: err.error }));

    //gets the group name from the database and sets it in state
    groupApiService.getGroupNameFromGroupId(
      this.state.group_id
    ).then(groupName => {
      this.setState({ groupName });
    });
  }

  //This adds a new player, and makes even teams if teams have already been created
  addPlayer = player => {
    const newPlayer = { present: true, ...player };
    this.setState({
      allPlayers: [...this.state.allPlayers, newPlayer]
    });
    if (this.state.teamOne.length > 0) {
      this.handleSplitTeams();
    }
  };

  //This marks a player as present or absent and then makes new teams if they have been made already
  togglePlayerPresent(idx) {
    const allPlayers = this.state.allPlayers;
    allPlayers[idx].present = !allPlayers[idx].present;
    this.setState({ allPlayers });
    if (this.state.teamOne.length > 0) {
      this.handleSplitTeams();
    }
  }

  //Builds an array of all the players as <li> to be displayed
  renderPlayersList = () => {
    const allPlayersArray = this.state.allPlayers.map((player, idx) => {
      const className = player.present ? 'player' : 'player red';
      return (
        <li
          className={className}
          key={player.id}
          onClick={() => this.togglePlayerPresent(idx)}
        >
          <span>{player.player_name}</span>
          <button
            aria-label="delete icon"
            type="delete"
            className="icon-button"
            onClick={() => this.handleClickDelete(player.id)}
          >
            <FontAwesomeIcon className="delete" icon="trash-alt" />
          </button>
        </li>
      );
    });
    return allPlayersArray;
  };

  render() {
    return (
      <div>
        <h2 className="group-name">{this.state.groupName}</h2>
        <section className="all-players-section">
          <h3 className="all-players-header">All Players</h3>
          <h4 className="all-players-subheader">
            This is where you can use the group you created. Add all the players
            you have and give them a skill level. Then just click the "make even
            teams" button and our algorithm will split the teams as evenly as
            mathmatically possible! Later you can come back to this page and
            manage your group by deleting players or adding new ones!
          </h4>
          <ul className="all-players">{this.renderPlayersList()}</ul>
        </section>

        {this.state.addPlayer ? (
          <PlayerForm
            toggleForm={this.toggleAddPlayer}
            addPlayer={this.addPlayer}
            group_id={this.state.group_id}
          />
        ) : (
          <div className="team-button-div">
            <button
              className="teams-page-buttons"
              onClick={this.toggleAddPlayer}
            >
              Add New Player
            </button>
            <button
              className="teams-page-buttons"
              onClick={this.handleSplitTeams}
            >
              Make Even Teams
            </button>
            <button
              className="teams-page-buttons"
              onClick={this.handleMakeRandomTeams}
            >
              Make Random Teams
            </button>
            <button
              className="teams-page-buttons"
              onClick={() =>
                this.props.history.push(
                  `/groups/${TokenService.getUserIdFromToken()}`
                )
              }
            >
              Go Back To My Groups
            </button>
          </div>
        )}
        {this.state.teamOne.length > 0 && (
          <Teams teamOne={this.state.teamOne} teamTwo={this.state.teamTwo} />
        )}
      </div>
    );
  }
}

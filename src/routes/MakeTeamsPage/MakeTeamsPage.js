import React from 'react'
import playerApiService from '../../services/player-api-service';
import PlayerForm from '../../components/PlayerForm/PlayerForm'


export default class SingleGroupPage extends React.Component {

  state = {
    error: null, 
    players: [],
    addPlayer: false,
  }

  toggleAddPlayer = () => {
    this.setState({addPlayer: !this.state.addPlayer});
  }

  componentDidMount() {
    const group_id = this.props.match.params.group_id;
    playerApiService.getPlayersByGroupId(group_id)
      .then(players =>{
        this.setState({
          players,
        })
      }).catch(error=>this.setState({error}))
  }

  addPlayer = newPlayer =>{
    this.setState({
      players: [newPlayer, ...this.state.players]
    })
  } 

  renderPlayersList = () => {
    const allPlayersArray = this.state.players.map(player=>{
      return (
        <li key={player.id}>
          {player.player_name}
        </li>
      )
    })
    return allPlayersArray;
  }


  render() {
    return (
      <div>
        {/*get the group name and put it here*/}
        <h2>My Group</h2>
        <ul className='all-players'>
          {this.renderPlayersList()}
        </ul>
        {this.state.addPlayer ? 
        <PlayerForm toggleForm={this.toggleAddPlayer} addPlayer={this.addPlayer} group_id={this.props.match.params.group_id}/> : 
        <button onClick={this.toggleAddPlayer}>Add New Player</button>}
        <button>Make Even Teams</button>
      </div>
    );
  }
}
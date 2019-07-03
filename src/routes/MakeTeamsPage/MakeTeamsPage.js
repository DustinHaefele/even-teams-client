import React from 'react'
import playerApiService from '../../services/player-api-service';


export default class SingleGroupPage extends React.Component {

  state = {
    error: null, 
    players: [],
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

  renderPlayersList() {
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
        <button>Add Player</button>
        <button>Make Even Teams</button>
      </div>
    );
  }
}
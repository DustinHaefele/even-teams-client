import React from 'react';
import './PlayerForm.css';
import config from '../../config';

export default class PlayerForm extends React.Component {
  
  state = {
    error: null,
  }
  
  handleSubmit = ev => {
    ev.preventDefault();
    const {player_name, player_skill} = ev.target;
    //adding player to a default group for now until I pass group down here.
    const player = {player_name: player_name.value, player_skill: player_skill.value, group_id: 1 }
    
    
    fetch(`${config.API_ENDPOINT}/players`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:  JSON.stringify(player),
    })
    .then(res=>{
      if(!res.ok){
        return res.json().then(e=>Promise.reject(e))
      }
      return res.json();
    }).then(()=>{
      player_name.value = '';
      player_skill.value = 1;
    }).catch(res =>{
      this.setState({
        error:res.error
      })
    })
  }
  
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor = 'player_name'>Player Name: </label>
        <input className="player_name" name="player_name" type="text" placeholder="New Player" />
        <label htmlFor='player_skill'>Skill Level: </label>
        <select className="player_skill" name='player_skill'>
          <option value={1}>1 - worst</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5 - best</option>
        </select>
        <button type="submit" className="button">
          Add Player
        </button>
      </form>
    );
  }
}

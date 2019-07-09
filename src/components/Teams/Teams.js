import React from "react";
import './Teams.css'

export default function Teams(props) {
  const teamOne = props.teamOne.map((player) => <li key={player.id} className='team-player'>{player.player_name}</li>);
  const teamTwo = props.teamTwo.map((player) => <li key={player.id} className='team-player'>{player.player_name}</li>);
  return (
    <div className="row">
      <div className="column teams">
        <h2 className='team-name'>Team 1</h2>
        <ul className='team-list'>{teamOne}</ul>
      </div>
      <div className="column teams">
        <h2 className='team-name'>Team 2</h2>
        <ul className='team-list'>{teamTwo}</ul>
      </div>
    </div>
  );
}

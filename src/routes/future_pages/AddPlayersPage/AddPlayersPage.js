import React from 'react';
import PlayerForm from '../../../components/PlayerForm/PlayerForm'

export default class AddPlayersPage extends React.Component {

  render() {
    return(
      <div>
        <h2>Add Players</h2>
        <PlayerForm />
      </div>
    );
  }
}
import React from 'react';
import './PlayerForm.css';

export default class PlayerForm extends React.Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.handleAddPlayer(
  //     e.target.playerName.value,
  //     e.target.playerSkill.value
  //   );
  //   e.target.playerName.value = '';
  // };
  //Add 5 levels for skill and order them high to low.
  render() {
    return (
      <form>
        <input class="playerName" type="text" placeholder="New Player" />
        <select class="playerSkill">
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

import React from 'react';

export default function UserListItem(props) {
  return (
    <li>
      <h3>
        {props.user.user_name}
        <span>: {props.user.full_name}</span>
      </h3>
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
      <button type="submit" className="button first-button">
            Add This User
      </button>
          {/* <button onClick={this.props.toggleForm} className="button">
            Cancel
          </button> */}
    </li>
  );
}

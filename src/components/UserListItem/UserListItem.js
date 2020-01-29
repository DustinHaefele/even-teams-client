import React from 'react';
import './UserListItem.css';

export default function UserListItem(props) {
  return (
    <li className="user-list-item">
      <div className='user-info-div'>
        <p>{props.user.user_name}</p>
      </div>
      <div className='user-info-div'>
        <p>{props.user.full_name}</p>
      </div>
      <div className='user-info-div'><select
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
      </select></div>
      <div className='user-info-div'> <button type="submit" className="button first-button">
        Add This User
      </button></div>
    </li>
  );
}

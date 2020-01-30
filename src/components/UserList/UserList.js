import React from 'react';
import UserListItem from '../UserListItem/UserListItem';
import './UserList.css';

export default function UserList(props) {
  function displayUserList() {
    return props.users.map((user, idx) => (
      <UserListItem user={user} key={idx} toggleForm={props.toggleForm} addPlayer={props.addPlayer} group_id={props.group_id}/>
    ));
  }

  return (
    <section className='user-list-section'>
      <ul className='user-list'>
        <li className='user-list-item'>
          <div className='user-info-div'>
            <p>User Name</p>
          </div>
          <div className='user-info-div'>
            <p>Full Name</p>
          </div>
          <div className='user-info-div'>
            <p>Choose a skill level</p>
          </div>
          <div className='user-info-div'>
            <p>Add this player</p>
          </div>
        </li>
        {displayUserList()}
      </ul>
    </section>
  );
}

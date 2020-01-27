import React from 'react';
import UserListItem from '../UserListItem/UserListItem';

export default function UserList (props) {

  function displayUserList() {
    return props.users.map((user, idx) =>  <UserListItem user={user} key={idx}/>)
  } 

  return (
    <ul>
      {displayUserList()}
    </ul>
  )
}
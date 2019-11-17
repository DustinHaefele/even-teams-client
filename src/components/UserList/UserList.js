import React from 'react';
import UserListItem from '../UserListItem/UserListItem';

export default function UserList (props) {

  function displayUserList() {
    return props.users.map(user =>  <UserListItem user={user} key={user.id}/>)
  } 

  return (
    <ul>
      {displayUserList()}
    </ul>
  )
}
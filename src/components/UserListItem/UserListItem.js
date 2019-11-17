import React from 'react';

export default function UserListItem (props) {
  
  return (
    <li key={props.user.id}>
      <h3>{props.user.user_name}</h3>
      <span>: {props.user.full_name}</span>
    </li>
  )
}
import React from 'react'
import CreateGroupForm from '../../../components/CreateGroupForm/CreateGroupForm'

export default class CreateGroupPage extends React.Component {

  render() {
    return (
      <div>
        <h2>Create New Group</h2>
        <CreateGroupForm />
      </div>
    );
  }
}

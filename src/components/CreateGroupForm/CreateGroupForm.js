import React from 'react';
import TokenService from '../../services/token-services';
import groupApiService from '../../services/group-api-service';

export default class CreateGroupForm extends React.Component {

  state = {
    error: null,
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const {group_name} = ev.target
    const user_id = TokenService.getUserIdFromToken();
    const group = {group_name: group_name.value, user_id };

    groupApiService.insertGroup(group)
      .then(group=>{
        group_name.value = '';
        this.props.addGroup(group);
        this.props.toggleForm();
      }).catch(res =>{
        this.setState({
          error:res.error
        })
      })

  }
  

  render() {
   return ( 
   <form onSubmit={this.handleSubmit}>
     <label htmlFor='group_name'>Group Name: </label>
     <input required className ='group-input' name='group_name' placeholder='Group Name' />
     <button type='submit'>Create Group</button>
    </form>
    );
  };
};
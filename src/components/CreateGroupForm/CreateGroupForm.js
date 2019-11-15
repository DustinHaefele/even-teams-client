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
    if(user_id !== parseInt(this.props.pageOwnerId)){
      this.props.onAddFail('You do not have access to add groups to this user\'s page');
      return null;
    }
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
   <form className='group-form' onSubmit={this.handleSubmit}>
     <div className='form-input-section'>
      <label htmlFor='group_name'>What do you want to name your group?</label>
      <input required className ='group-input' id='group_name' name='group_name' placeholder='i.e. Wednesday Night Volleyball' />
     </div>
      <button className='create-group-button' type='submit'>Submit New Group</button>
      <button className='create-group-button' onClick={this.props.toggleForm}>Cancel</button>
    </form>
    );
  };
};
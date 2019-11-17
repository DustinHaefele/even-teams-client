import React from 'react';
import { Link } from 'react-router-dom';
import groupApiService from '../../services/group-api-service';
import CreateGroupForm from '../../components/CreateGroupForm/CreateGroupForm';
import './MyGroupsPage.css'
import TokenService from '../../services/token-services';


export default class MyGroupPage extends React.Component {
  static defaultProps = {
  user_id: null,
}

  state = {
    error: null, 
    groups: [],
    addGroup: false,
  }

  toggleAddGroup = () => {
    this.setState({addGroup: !this.state.addGroup});
  }

  addGroup = newGroup =>{
    this.setState({
      groups: [...this.state.groups, newGroup]
    })
  } 

  handleAddFail = error =>{
    this.setState({error});
  }

  componentDidMount() {
    groupApiService.getGroupsByUserId(this.props.match.params.user_id)
      .then(groups =>{
        this.setState({
          groups,
        })
      }).catch(err=>{
        this.setState({
          error: err.error,
        });
      });
  }
    
  renderMyGroups = () =>{
    const groupArray = this.state.groups.map(group =>{
      return (
        
          <Link key={group.id} to={`/maketeams/${group.id}`}>
            <li className='group'>
            {group.group_name}
            </li>
          </Link>
       
      );
  })
    return groupArray;
  };



  render(){
    return (
      <div className='groups-page'>
        <h2 className='group-header'>{TokenService.getUserNameFromToken()}'s Groups</h2>
        <h4 className='sec_header'>This is your groups page.  If you haven't been here before you can start by creating your first group! Or click on one of your groups below!</h4>
        {this.state.error && <p>{this.state.error}</p>} 
        <ul className='groups-list'>
          {this.renderMyGroups()}
        </ul>
        {this.state.addGroup ? 
        <CreateGroupForm toggleForm={this.toggleAddGroup} onAddFail = {this.handleAddFail} addGroup={this.addGroup} pageOwnerId = {this.props.match.params.user_id}/> : 
        <button className='button' onClick={this.toggleAddGroup}>Create New Group</button>}
      </div>
    );
  };
}
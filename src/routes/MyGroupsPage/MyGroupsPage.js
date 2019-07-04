import React from 'react';
import { Link } from 'react-router-dom';
import groupApiService from '../../services/group-api-service';
import CreateGroupForm from '../../components/CreateGroupForm/CreateGroupForm';


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
          error: err,
        });
      });
  }
    
  renderMyGroups = () =>{
    const groupArray = this.state.groups.map(group =>{
      return (
        <li key={group.id}>
          <Link to={`/maketeams/${group.id}`}>
            {/* make these buttons? */}
            {group.group_name};
          </Link>
        </li>
      );
  })
    return groupArray;
  };



  render(){
    return (
      <div>
        <h2>My Groups</h2>
        {this.state.error && <p>{this.state.error}</p>} {/*Add button here to navigate to your own page */}
        <ul>
          {this.renderMyGroups()}
        </ul>
        {this.state.addGroup ? 
        <CreateGroupForm toggleForm={this.toggleAddGroup} onAddFail = {this.handleAddFail} addGroup={this.addGroup} pageOwnerId = {this.props.match.params.user_id}/> : 
        <button onClick={this.toggleAddGroup}>Create New Group</button>}
      </div>
    );
  };
}
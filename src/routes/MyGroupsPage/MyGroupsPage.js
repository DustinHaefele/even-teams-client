import React from 'react';
import { Link } from 'react-router-dom';
import groupApiService from '../../services/group-api-service';


export default class MyGroupPage extends React.Component {
  static defaultProps = {
  user_id: 1,
}

  state = {
    error: null, 
    groups: []
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
        <ul>
          {this.renderMyGroups()}
        </ul>


      </div>
    );
  };
}
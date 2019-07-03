import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './routes/MainPage/MainPage';
import LoginPage from './routes/LoginPage/LoginPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import CreateGroupPage from './routes/CreateGroupPage/CreateGroupPage';
import AddPlayersPage from './routes/AddPlayersPage/AddPlayersPage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import MyGroupsPage from './routes/MyGroupsPage/MyGroupsPage';
import './App.css';
import Header from './routes/Header/Header';
import MakeTeamsPage from './routes/MakeTeamsPage/MakeTeamsPage';

class App extends React.Component {
  state = {hasError: false};
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
      {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            {/* Can make these public and private after adding AUth */}
            <Route
              exact
              path={'/'}
              component={MainPage}
            />
            <Route
              path={'/login'}
              component={LoginPage}
            />
             <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path={'/create-group'}
              component={CreateGroupPage}
            />
            <Route
              path={'/add-players/:group_id'}
              component={AddPlayersPage}
            />
            <Route 
              path={'/groups/:user_id'}
              component={MyGroupsPage}
            />
            <Route 
              path={'/maketeams/:group_id'}
              component={MakeTeamsPage}
            />
            <Route
              component={NotFoundPage}
            /> 
          </Switch>
        </main>
    </div>
  );
}
}

export default App;

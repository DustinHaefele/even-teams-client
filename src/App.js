import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './routes/MainPage/MainPage';
import LoginPage from './routes/LoginPage/LoginPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import CreateGroupPage from './routes/CreateGroupPage/CreateGroupPage';
import AddPlayersPage from './routes/AddPlayersPage/AddPlayersPage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import MyGroupsPage from './routes/MyGroupsPage/MyGroupsPage';
import PublicRoute from './Routing/PublicRoute';
import PrivateRoute from './Routing/PrivateRoute';
import './App.css';
import Header from './routes/Header/Header';
import MakeTeamsPage from './routes/MakeTeamsPage/MakeTeamsPage';


class App extends React.Component {
  state = {hasError: false};

  handleLogin = () => {
    console.log('I\'m in')
    this.forceUpdate();
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
  return (
    <div className="App">
      <header className="App__header">
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
            <PublicRoute
              path={'/login'}
              component={LoginPage}
              onLogin = {this.handleLogin}
            />
             <PublicRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/create-group'}
              component={CreateGroupPage}
            />
            <PrivateRoute
              path={'/add-players/:group_id'}
              component={AddPlayersPage}
            />
            <PrivateRoute 
              path={'/groups/:user_id'}
              component={MyGroupsPage}
            />
            <PrivateRoute 
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

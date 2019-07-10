import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import MainPage from './routes/MainPage/MainPage';
import LoginPage from './routes/LoginPage/LoginPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import MyGroupsPage from './routes/MyGroupsPage/MyGroupsPage';
import PublicRoute from './Routing/PublicRoute';
import PrivateRoute from './Routing/PrivateRoute';
import Header from './components/Header/Header';
import MakeTeamsPage from './routes/MakeTeamsPage/MakeTeamsPage';
import Footer from './components/Footer/Footer'

class App extends React.Component {
  state = {hasError: false};

  handleLogin = () => {
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
      {this.state.hasError && <p className='red'>Sorry, something went wrong!</p>}
          <Switch>
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
        <Footer />
    </div>
  );
}
}

export default App;

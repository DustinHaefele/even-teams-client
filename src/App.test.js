import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter} from 'react-router-dom';
import App from './App';
import MainPage from './routes/MainPage/MainPage'
import LoginPage from './routes/LoginPage/LoginPage'
import MakeTeamsPage from './routes/MakeTeamsPage/MakeTeamsPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import CreateGroupForm from './components/CreateGroupForm/CreateGroupForm'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import PlayerForm from './components/PlayerForm/PlayerForm';
import RegistrationForm from './components/RegisterForm/RegisterForm';
import Teams from './components/Teams/Teams';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVolleyballBall, faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

library.add (
  faVolleyballBall,
  faTrashAlt,
  faEdit
)

describe('Page smoke tests', () =>{
  it('renders App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders MainPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><MainPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders LoginPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><LoginPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders MakeTeamsPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><MakeTeamsPage match={{params: {group_id:1}}}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders RegistrationPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><RegistrationPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders NotFoundPage without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><NotFoundPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('Component smoke tests', () =>{
  it('renders CreateGroupForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><CreateGroupForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Footer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Footer /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders LoginForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><LoginForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders RegistrationForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><RegistrationForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders PlayerForm without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><PlayerForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Teams without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Teams teamOne={[{id: 1, player_name: 'harry'}, {id: 2, player_name: 'harry2'}]} teamTwo={[{id: 3, player_name: 'harry3'}, {id: 4, player_name: 'harry4'}]}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})


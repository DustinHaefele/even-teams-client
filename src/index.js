import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add (
  faVolleyballBall,
)

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>
, 
document.getElementById('root')
);


serviceWorker.unregister();

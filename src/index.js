import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers/reducer';
import Navbar from './components/navbar';
import Home from './components/Home';
import ReduxApp from './components/ReduxApp';

const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/redux' component={ReduxApp} />
        <Route path='/state' component={States} />
      </App>
    </Provider>
 </Router>,
  document.getElementById('root')
);

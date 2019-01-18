import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers/reducer';
import Home from './components/Home';
import ReduxApp from './components/ReduxApp';
import StatesApp from './components/StatesApp';

const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <Route exact path='/' component={Home} />
        <Route path='/redux' component={ReduxApp} />
        <Route path='/states' component={StatesApp} />
      </App>
    </Provider>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { mainRoutes } from './router/config'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux';

import './styles/reset.css';
import './styles/antd.css';
import './styles/index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/hooks" render={(routeProps: any) => <App {...routeProps} />} />
        {mainRoutes.map(route => (
          <Route key={route.path} {...route}></Route>
        ))}
        <Redirect to="/hooks/useMouseHook" />
      </Switch>
    </Router>
  </Provider>

  ,
  document.getElementById('root')
);


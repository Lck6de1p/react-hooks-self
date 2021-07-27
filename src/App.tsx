import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './router/config'

import './styles/reset.css';
import './styles/antd.css';

const App: FC = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} path={route.path} component={route.component}></Route>
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;

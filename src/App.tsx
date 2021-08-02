
import { Switch, Route } from 'react-router-dom';
import { hooksRoutes } from './router/config';
import Frame
from './components/Frame';
const App = () => {
  return (
    <Frame>
      <Switch>
        {hooksRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            render={(routeProps: any) => {
              return <route.component {...routeProps} />
            }}
          />
        ))}
      </Switch>
    </Frame>
  );
}

export default App;

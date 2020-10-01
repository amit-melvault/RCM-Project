import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import NotFoundPage from '../NotFoundPage/Loadable';
import FrontPage from './front-page';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route component={NotFoundPage} />
    </Switch>
  );
}
export default hot(App);

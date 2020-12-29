import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from './components/Layout'
import App from './App';
import { GoogleBooks } from './components/GoogleBooks/index'
import { Otameshi } from './Otameshi';

export const Path = {
    app: '/',
    otameshi: '/otameshi',
};

const routes = (
  <Layout>
    <Switch>
      <Route exact path={Path.app} component={App} />
      <Route exact path={Path.otameshi} component={GoogleBooks} />
      <Redirect to={Path.app} />
    </Switch>
  </Layout>
);

export default routes;
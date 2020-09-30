import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import NotFoundPage from '../NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Login from '../../components/Login';
import LoginPage from '../../components/Login/Login';
import AuthForm from '../../components/Auth/loginForm';
import Navbar from '../../components/Navbar';
import Product from '../Header';
import PaginationTop from '../Pagination'
import DataTable from '../TableList'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={AuthForm} />
        <Route component={NotFoundPage} />
      </Switch> */}
      <Product />
      <PaginationTop />
      <DataTable />
      <GlobalStyle />
    </div>
  );
}
export default hot(App);

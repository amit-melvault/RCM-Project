import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import NotFoundPage from '../NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Login from '../../components/Login';
import LoginPage from '../../components/Login/Login';
import AuthForm from '../../components/Auth/loginForm';
import Navbar from '../../components/Navbar';
import Product from '../Product';
import PaginationTop from '../../components/Pagination'
import DataTable from '../../components/TableList'

function FrontPage() {
  return (
    <div>
      <Navbar />
      <Product />
      <PaginationTop />
      <DataTable />
      <GlobalStyle />
    </div>
  );
}
export default FrontPage;

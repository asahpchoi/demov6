import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom';

import './style.css';

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

function Copyright(props) {
  return <></>;
}

const Banner = (props) => {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={5} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

const User = () => {
  return <div>User</div>;
};

const Home = () => {
  return <>Home</>;
};

const Main = () => {
  return <></>;
};

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">User</Link>
      </nav>
    </>
  );
};

const Flight = () => {
  return <>Flight</>;
};

const City = () => {
  return <>City</>;
};
const Island = () => {
  return <>Island</>;
};

const App = () => (
  <>
    <div class="header">
      <h1>Chania</h1>
    </div>

    <div class="row">
      <div class="col-3 col-s-3 menu">
        <ul>
          <li>
            <Link to="/flight">The Flight</Link>
          </li>
          <li>
            <Link to="/city">City</Link>
          </li>
          <li>
            <Link to="/island">Island</Link>
          </li>
        </ul>
      </div>

      <div class="col-6 col-s-9">
        <Routes>
          <Route path="/flight" element={<Flight />} />
          <Route path="/city" element={<City />} />
          <Route path="/island" element={<Island />} />
        </Routes>
      </div>

      <div class="col-3 col-s-12">
      </div>
    </div>

    <div class="footer">
      <p>
        Resize the browser window to see how the content respond to the
        resizing.
      </p>
    </div>
  </>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

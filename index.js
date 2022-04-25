import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

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

const App = () => (
  <>
    <div id="container">
      <header>
        <h1 contenteditable>
          <Banner />
        </h1>
      </header>
      <div class="left-sidebar" contenteditable>
        <Nav />
      </div>
      <main contenteditable>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<User />} />
          </Routes>
        </Suspense>
      </main>
      <footer contenteditable>Footer Content — Header.com 2020</footer>
    </div>
  </>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

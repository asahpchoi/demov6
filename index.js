import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { Home, UsersRoutes } from './pages';

const App = () => (
  <>
    <h1>App</h1>
    <nav>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
      </ul>
    </nav>
    <Suspense fallback={null}>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<UsersRoutes />} />
      </Routes>
    </Suspense>
  </>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

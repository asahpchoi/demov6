import React from 'react';
import { Link } from 'react-router-dom';

export const UserList = () => (
  <>
    <h2>UserList</h2>
    <ul>
      <li>
        <Link to="1">1</Link>
      </li>
      <li>
        <Link to="2">2</Link>
      </li>
      <li>
        <Link to="3">3</Link>
      </li>
    </ul>
  </>
  
);

export default UserList;

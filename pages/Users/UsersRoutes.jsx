import React, { Suspense } from 'react';
import { Route, Routes, Outlet, useRoutes } from 'react-router-dom';

// import { UserList } from './UserList';
// const UserList = () => React.lazy(() => import('./UserList'));
// const UserDetail = () => React.lazy(() => import('./UserDetail'));

// export const UsersRoutes = () => (
//   <Routes>
//     <Route path="/" element={<div>aaaa</div>} />
//   </Routes>
// );

export const UserRoutes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <div>aaaa</div>
    }
  ]);

  return element;
};

import { createRoot } from 'react-dom/client';
import React from 'react';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const Header = () => {
  return <Button variant="contained">Hello World</Button>;
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

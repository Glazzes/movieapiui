import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import '../src/assets/container.css'
import { CreateAccount } from './pages';

const App: React.FC = () => {
  return (
    <div className="root-container">
      <CreateAccount />
    </div>
  );
}

export default App;

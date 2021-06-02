import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LaunchListContainer from './components/MissionList';
import AppRouter from './config';

function App() {
  return (
    <div className='main'>
      <AppRouter />
      {/* <Header />
      <LaunchListContainer /> */}
    </div>
  );
}

export default App;

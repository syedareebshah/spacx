import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LaunchListContainer from './components/MissionList';

function App() {
  return (
    <div className='main'>
      <Header />
      <LaunchListContainer />
    </div>
  );
}

export default App;

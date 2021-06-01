import React from 'react';
import logo from './logo.svg';
import './App.css';
import MissionList from './components/MissionList';
import MissionDetail from './components/MissionDetail';

function App() {
  return (
    <div>
      <MissionList />
      <MissionDetail />
    </div>
  );
}

export default App;

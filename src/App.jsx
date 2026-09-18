import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import Stats from './components/stats';
import About from './components/About';
import Layout from './components/Layout';
import Status from './components/Status';
import Fun from './components/Fun';
import Location from './components/Location';
import Highlights from './components/Highlights';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Stats />
      <About />
      <Layout />
      <Status />
      <Fun />
      <Location />
      <Highlights />
      <Login />
    </div>
  );
}

export default App;
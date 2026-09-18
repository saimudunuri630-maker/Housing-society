import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Stats from './components/Orange';
import About from './components/About';
import Layout from './components/Layout';
import Status from './components/Status';
import Fun from './components/Fun';
import Location from './components/Location';
import Highlights from './components/Highlights';
import Login from './components/Login';
import Enquiry from './components/Enquiry';

function App() {
  return (
    <div className="app">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <Home />
        <Orange />
        <About />
        <Layout />
        <Status />
        <Fun />
        <Location />
        <Highlights />
        <Login />
      </main>

      {/* Persistent floating sticky enquiry tab */}
      <Enquiry />
    </div>
  );
}

export default App;
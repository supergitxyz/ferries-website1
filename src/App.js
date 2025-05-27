import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <HeroSection />
      <main style={{ padding: '32px' }}>
        {/* Main content will go here */}
        <h1>Welcome to False Creek Ferries</h1>
        <p>This is a new website inspired by granvilleislandferries.bc.ca</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

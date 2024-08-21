// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
    const containerStyle = {
        backgroundColor: '#f7f7f8', // Use the background color from the Hero section
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        
        justifyContent: 'space-between',
    };

    return (
        <div style={containerStyle}>
            <Header />
            <Hero />
            <Navbar />
        </div>
    );
};

export default App;

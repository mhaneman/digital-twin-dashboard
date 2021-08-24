import './App.css';

import Dashboard from './dashboard/Dashboard'

import React, { useEffect } from 'react'

function App() {

    // checks if the user wants dark mode
    useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const prefersDark = JSON.parse(json);
    
        if (prefersDark) {
            document.body.classList.add("dark");
        }
    
    }, []);

  return (
      <div className="app">
        <Dashboard />
      </div>
  );
}

export default App;

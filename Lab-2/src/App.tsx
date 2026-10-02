import React from 'react';
import { CardContainer } from './CardContainer';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Resorts Lite</h1>
      </header>
      <main>
        <CardContainer />
      </main>
    </div>
  );
}

export default App;
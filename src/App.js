import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navigation />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
//create component function for each nav link 
import Nav from './Components/NavWrapper';

function App() {
  return (
    <div className="App">
    {/* create the routes to the components */}
      <Nav />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import linked from './li.png';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Jann Tutoring</h1>
      <nav>
        <a href="https://www.linkedin.com/in/maxjann/">
        <img className="short" src={linked}></img>        
        </a>
      </nav>
      </header>
      <main>
      <h2>Woodland Hills</h2>
      <h3>Chess </h3>Beginner-1800
      <h3>Math </h3>K-PreCalculus
      <h4>$20/hr</h4>
      <h2>805 940 5096</h2>
      </main>
      <footer> <a href="https://maxjann.com">Jann Software</a></footer>
    </div>
  );
}

export default App;

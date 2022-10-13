import React from 'react';
import './styles/App.css';
import './styles/Forms.css';
import { Personal } from './components/Personal';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Header } from './components/Header';
import { Preview } from './components/Preview';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="forms">
          <form>
            <Personal />
            <Experience />
            <Education />
          </form>
        </div>
        <Preview />
      </div>
    </div>
  );
}

export default App;

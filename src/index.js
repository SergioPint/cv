import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EducationProvider } from './contexts/EducationContext';
import { ExperienceProvider } from './contexts/ExperienceContext';
import { PersonalProvider } from './contexts/PersonalContext';

ReactDOM.render(
  <React.StrictMode>
    <PersonalProvider>
      <EducationProvider>
        <ExperienceProvider>
          <App />
        </ExperienceProvider>
      </EducationProvider>
    </PersonalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

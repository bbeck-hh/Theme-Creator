import React, { useState } from 'react';
import Theme from './components/Theme/Theme';
import ThemeForm from './components/ThemeForm/ThemeForm';
import { themes } from './db';
import "./styles.css";

export default function App() {
  const [activeTheme, setActiveTheme] = useState(null); // Initial kein geöffnetes Theme

  return (
    <>
      <header>
        <h1>Theme Creator</h1>
      </header>
      <ThemeForm />
      {
        themes.map((theme, index) => (
          <div key={index} className="card-container">
            {/* Übergabe der Props an das Theme-Element */}
            <Theme
              // aktuelles Theme
              theme={theme}
              // Index des aktuellen Themes
              index={index}
              // Index des aktuell geöffneten Themes
              activeTheme={activeTheme}
              //Setter-Funktion, um das aktuell geöffnete Theme zu setzen
              setActiveTheme={setActiveTheme}
            />
          </div>
        ))
      }
    </>
  );
}

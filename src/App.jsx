import React, { useEffect, useState } from 'react';

import Card from "./components/Card/Card";
import Theme from './components/Theme/Theme';
import { themes } from './db';
import "./styles.css";

export default function App() {
  const [isCollapse, setIsCollapse] = useState(true);

  function handleCollapse(event) {
    event.preventDefault();
    setIsCollapse(!isCollapse);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      {
        themes.map((theme, index) => (
          <div key={index} className="card-container">
            <div className="card__collection-name">
              <span>{theme.name}</span>
              <button onClick={handleCollapse} className={isCollapse ? 'active' : ''}></button>
            </div>

            {isCollapse ? <Theme theme={theme} /> :

              theme.colors.map((color, colorIndex) => (
                <Card
                  key={colorIndex}
                  colorRole={color.role}
                  colorHex={color.value}
                  colorName={color.name}
                />
              ))

            }
          </div>
        ))
      }
    </>
  );
}

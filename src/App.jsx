import React, { useEffect, useState } from 'react';

import Card from "./components/Card/Card";
import "./styles.css";

import { themes } from './db';

export default function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {
        themes.map((theme, index) => (
          <div key={index} className="card-container">
            <h2 className="card__collection-name">{theme.name}</h2>
            {theme.colors.map((color, colorIndex) => (
              <Card
                key={colorIndex}
                colorRole={color.role}
                colorHex={color.value}
                colorName={color.name}
              />
            ))}
          </div>
        ))
      }
    </>
  );
}

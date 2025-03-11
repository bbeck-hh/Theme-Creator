import React, { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import Theme from './components/Theme/Theme';
import ThemeForm from './components/ThemeForm/ThemeForm';
import { themes as initialThemes } from './db';
import "./styles.css";

export default function App() {
  // Initial kein geöffnetes Theme
  const [activeTheme, setActiveTheme] = useState(null);

  // Neues Theme, unter Verwenden des Custom Hooks useLocalStorageState gespeichert und geladen
  const [themes, setThemes] = useLocalStorageState('themes', {
    defaultValue: initialThemes,
  });

  function handleAddTheme(newTheme) {
    // Fügt das neue Theme an den Anfang des Arrays hinzu und setzt das neue Array als State
    // Ab in den local storage und in die Liste
    setThemes([newTheme, ...themes]);
  }

  // Löschen eines Themes
  function handleDeleteTheme(index) {
    // Filtert das Array und entfernt das Theme an der Stelle des Index
    // .filter() -> Neues Array, enthält alle Elemente, die die Bedingung erfüllen.
    // überprüfen, ob der aktuelle Index (i) nicht gleich dem übergebenen index ist(i !== index).
    // Wenn i nicht gleich index ist, wird das Element im neuen Array (newThemes) behalten, andernfalls wird es entfernt.
    const newThemes = themes.filter((_, i) => i !== index);
    // Löschen aus dem local storage un aus der Liste
    setThemes(newThemes);
  }

  return (
    <>
      <header>
        <h1>Theme Creator</h1>
      </header>
      {/* Formular zur Erstellung  eines neuen Theme */}
      <ThemeForm onAddTheme={handleAddTheme} onDeleteTheme={handleDeleteTheme} />
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
              // Funktion zum Löschen eines Themes
              onDeleteTheme={handleDeleteTheme}
            />
          </div>
        ))
      }
    </>
  );
}

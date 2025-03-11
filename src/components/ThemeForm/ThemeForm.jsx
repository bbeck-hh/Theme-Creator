import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { v4 as uuid } from "uuid";
import "./ThemeForm.css";

export default function ThemeForm({ onAddTheme }) {
    // Verwalten der Farben, für die Farbauswahl im Color Picker.
    // Default Farbe ist #aabbcc
    const [color, setColor] = useState("#aabbcc");

    // Aktives Color Field
    const [activeColorField, setActiveColorField] = useState(null);

    // Eingegebener Theme Name
    const [themeName, setThemeName] = useState("");

    // Default Farbe für die "Kreise" Farbauswahl
    const defaultColor = "#fff";

    // Default Value Array -> vereinfacht das hinzufügen von neuen Themes
    // role -> Farbrolle, value -> Farbwert, name -> Farbname
    const defaultValueArray = [
        { role: 'primary', value: defaultColor, name: 'Primary Color' },
        { role: 'secondary', value: defaultColor, name: 'Secondary Color' },
        { role: 'Surface', value: defaultColor, name: 'Tertiary Color' },
        { role: 'Surface-on', value: defaultColor, name: 'Quaternary Color' },
    ];

    // Farben Array
    const [colors, setColors] = useState(defaultValueArray);


    const randomId = uuid();

    function handleSubmit(event) {
        event.preventDefault();
        const newTheme = {
            id: uuid(),
            name: event.target.name.value,
            colors: colors,
        };
        onAddTheme(newTheme);
        resetForm();
    }

    // Color Field Click -> Setzt den aktiven Color Field
    function handleColorFieldClick(index) {
        setActiveColorField(index);
        setColor(colors[index].value);
    }

    // Change Color ->
    // Setzt die aktive Farbe aus dem Color Picker und überschreibt den default Wert
    function handleColorChange(newColor) {
        setColor(newColor);
        if (activeColorField !== null) {
            const updatedColors = [...colors];
            updatedColors[activeColorField].value = newColor;
            setColors(updatedColors);
        }
    }

    // Close Color Picker -> Setzt den aktiven Color Field auf null/falsy
    function handleClosePicker() {
        setActiveColorField(null);
    }

    // Reset Form -> 
    // Setzt den Theme Name, die Farben zurück und schliesst den Color Picker
    function resetForm() {
        setThemeName("");
        setColors(defaultValueArray);
        setActiveColorField(null);
    }

    return (
        <>
            <div className="card-container">
                <form className="addTheme__form" onSubmit={handleSubmit}>
                    <div className="addTheme__container" id={randomId}>
                        <h2>Add a Theme</h2>
                        <label htmlFor="theme-name"></label>
                        <input
                            type="text"
                            name="name"
                            id="theme-name"
                            placeholder="Name"
                            value={themeName}
                            onChange={(e) => setThemeName(e.target.value)}
                            required
                        />

                        <div className="addTheme__colors">
                            <p>Klicke auf die Kreise,um eine Farbauswahl zu treffen.</p>
                            {/* Array für die 4 "Kreise" Farben */}
                            {[0, 1, 2, 3].map((index) => (
                                <div
                                    // Erstelle mir 4 "Kreise" für die Farbauswahl jeder bekommt ein handleClick Event
                                    // und führt den Setter aus.Aktualisieren des state(setActiveColorField)
                                    // Change Color -> Setzt die aktive Farbe aus dem Color Picker und überschreibt den default
                                    key={index}
                                    id={`color-field-${index}`}
                                    className="theme__color-plate addTheme__pickColor"
                                    style={{ backgroundColor: colors[index].value }}
                                    onClick={() => handleColorFieldClick(index)}
                                ></div>
                            ))}
                        </div>
                        {activeColorField !== null && (
                            <div className="color-picker">
                                {/* Übergeben der newColor(color) und ausführen des Setter, aktualisieren des state(setColor) */}
                                <HexColorPicker color={color} onChange={handleColorChange} />
                                {/* Close Color Picker, bei onCllick */}
                                <button type="button" className="color-picker__button" onClick={handleClosePicker}></button>
                            </div>
                        )}
                        <button className="addTheme__button">Füge dein Theme hinzu</button>
                    </div>
                </form>
            </div>
        </>
    )
}
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { v4 as uuid } from "uuid";
import "./ThemeForm.css";
export default function ThemeForm() {
    // Verwalten der Farben, für die Farbauswahl im Color Picker.
    const [color, setColor] = useState("#aabbcc");
    const [activeColorField, setActiveColorField] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

    }

    // Color Field Click -> Setzt den aktiven Color Field
    function handleColorFieldClick(index) {
        setActiveColorField(index);
    }

    // Change Color -> Setzt die aktive Farbe aus dem Color Picker und überschreibt den default
    function handleColorChange(newColor) {
        setColor(newColor);
        if (activeColorField !== null) {
            document.getElementById(`color-field-${activeColorField}`).style.backgroundColor = newColor;
        }
    }

    // Close Color Picker -> Setzt den aktiven Color Field auf null/falsy
    function handleClosePicker() {
        setActiveColorField(null);
    }

    const randomId = uuid();
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
                                    style={{ backgroundColor: '#ffffff' }}
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
                        <button className="addTheme__button">Add your Theme</button>
                    </div>
                </form>
            </div>
        </>
    )
}
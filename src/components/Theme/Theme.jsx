import React, { useState } from 'react';
import Card from "../Card/Card";
import "./Theme.css";

export default function Theme({ theme, index, activeTheme, setActiveTheme }) {
    function handleCollapse(event) {
        event.preventDefault();
        // Wenn das gerade angeklickte Theme bereits geöffnet ist, schließe es, andernfalls öffne es
        setActiveTheme(activeTheme === index ? null : index);
        //console.log(`theme.name: ${theme.name} und index: ${index}`);
    }

    return (
        <div className="theme">
            <div className="card__collection-name">
                <span>{theme.name}</span>

                <button onClick={handleCollapse} className={activeTheme === index ? 'active' : ''}>
                </button>
            </div>

            {/* Wenn das aktuelle Theme geöffnet ist, zeige die Details an, andernfalls zeige die Vorschau an */}
            {activeTheme === index ? (
                <div className="card-details">
                    {/* Map über das theme.colors und erstelle ein neues array color  */}
                    {theme.colors.map((color, colorIndex) => (
                        // Übergabe der Props an Card Komponente 
                        // key ist der unique identifier,
                        // colorIndex ist der Index des aktuellen Colors
                        // colorRole ist die Rolle der Farbe,
                        // colorHex ist der Hex-Wert der Farbe,
                        // colorName ist der Name der Farbe
                        <Card
                            key={colorIndex}
                            colorRole={color.role}
                            colorHex={color.value}
                            colorName={color.name}
                        />
                    ))}
                </div>
            ) : (
                <div className="theme__preview">
                    <div className="theme__colors">
                        {/* Map über das theme.colors und erstelle ein neues array color */}
                        {theme.colors.map((color, index) => (
                            // Füür jedes color ein div. className=theme__color-plate erstellen und inline den Hintergrundfarbwert einfügen
                            <div key={index} className="theme__color-plate" style={{ backgroundColor: color.value }}>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

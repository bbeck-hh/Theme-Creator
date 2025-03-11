import React, { useEffect, useState } from "react";
import "./Card.css";

export default function Card({ colorRole, colorHex, colorName }) {
    const [colorNameState, setColorNameState] = useState(colorName);

    useEffect(() => {
        async function fetchColorName() {
            try {
                const response = await fetch(`https://api.color.pizza/v1/${colorHex.replace('#', '')}`);
                const data = await response.json();
                setColorNameState(data.colors[0].name);
            } catch (error) {
                console.error("Error fetching color name:", error);
            }
        }
        fetchColorName();
    }, [colorHex]);

    return (

        <article className="card">
            <div className="card__color" style={{ backgroundColor: colorHex || '#ffffff' }}>

                <div className="card__color-name">{colorNameState}</div>
            </div>
            <div className="card__content">
                <p className="card__color-role">{colorRole}</p>
                <label htmlFor="colorHex">{colorHex}</label>
                <input type="text" name="colorHex" id="colorHex" value={colorHex} readOnly />
                {/* readOnly muss noch gegen onChange später ersetzt werden */}
            </div>
        </article>
    )
}
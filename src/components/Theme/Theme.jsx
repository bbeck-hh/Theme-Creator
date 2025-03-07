import React from 'react';
import "./Theme.css";

export default function Theme({ theme, onCollapse }) {
    if (!theme) {
        return null;
    }

    return (
        <div className="theme">
            <div className="theme__colors">
                {theme.colors.map((color, index) => (
                    <div key={index} className="theme__color-plate" style={{ backgroundColor: color.value }}>
                    </div>
                ))}
            </div>
        </div>
    );
}
import "./Card.css";

export default function Card({ colorRole, colorHex, colorName }) {
    return (

        <article className="card">
            <div className="card__color" style={{ backgroundColor: colorHex || '#ffffff' }}><div className="card__color-name">{colorName}</div></div>
            <div className="card__content">
                <p className="card__color-role">{colorRole}</p>
                <label htmlFor="colorHex">{colorHex}</label>
                <input type="text" name="colorHex" id="colorHex" value={colorHex} readOnly />
                {/* readOnly muss noch gegen onChange später ersetzt werden */}
            </div>
        </article>
    )
}
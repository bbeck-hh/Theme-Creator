import "./Card.css";

export default function Card({ colorName }) {
    return (

        <article className="card">
            <div className="card__color"></div>
            <div className="card__content">
                <p className="card__color-name">{colorName}</p>
                <label htmlFor="colorHex"></label>
                <input type="text" name="colorHex" id="colorHex" />
            </div>
        </article>
    )
}
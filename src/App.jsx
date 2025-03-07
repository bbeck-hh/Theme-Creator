import React from "react";

import Card from "./components/Card/Card";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <div class="card-container">
        <h2 class="card__collection-name">Deep</h2>
        <Card colorName="deepBlue" />
        <Card colorName="deepRed" />
        <Card colorName="deepYellow" />
        <Card colorName="deepGreen" />
      </div>
    </>
  );
}

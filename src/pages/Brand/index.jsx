import React from "react";

import "./index.scss";

function BrandComponent() {
  const subData = {
    A: ["A1", "B1", "C1"],
    B: ["B1", "B1", "B1"],
    C: ["C1", "C1", "C1"],
    CD: ["C1", "C1", "C1"],
    D: ["C1", "C1", "C1"],
    E: ["C1", "C1", "C1"],
    F: ["C1", "C1", "C1"],
    G: ["C1", "C1", "C1"],
  };

  return (
    <div>
      <h1>BRAND COMPONENT</h1>
      <Alphabet />
      {Object.keys(subData).map((key) => (
        <AlphabetContent value={key} content={subData[key]} />
      ))}
    </div>
  );
}

function Alphabet() {
  return (
    <div>
      <h1>Alphabet</h1>
    </div>
  );
}

function AlphabetContent({ value, content }) {
  return (
    <div>
      <h1 className={"title"}>{`AlphabetContent ${value}`}</h1>
      <div>
        {content.map((e) => (
          <h1>{e}</h1>
        ))}
      </div>
    </div>
  );
}

export default BrandComponent;

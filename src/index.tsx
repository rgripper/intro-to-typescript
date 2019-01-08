import * as React from "react";
import { render } from "react-dom";
import { hexToRgb, rgbToHex } from "./chapter - function-type/color-functions";

import "./styles.css";

export let color = {
  r: 255,
  g: 0,
  b: 0,
  get hex(): string {
    return rgbToHex(this.r, this.g, this.b);
  },
  set hex(hex: string) {
    let { r, g, b } = hexToRgb(hex);
    this.r = r;
    this.g = g;
    this.b = b;
  }
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

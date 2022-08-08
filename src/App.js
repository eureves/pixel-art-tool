import React, { useState, useMemo, useRef } from "react";
import useStyles from "./App.styles";
import Grid from "./Components/Grid";
import ColorPicker from "./Components/ColorPicker";

const offCell = {
  on: false,
  color: "#000",
};

const iniitialCells = Array.from({ length: 100 }, () => offCell);

function App() {
  const classes = useStyles();
  const [cells, setCells] = useState(iniitialCells);
  const [currentColor, setCurrentColor] = useState("#56BC58");
  const colorSwatch = useMemo(
    () => [...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color))],
    [cells]
  );

  return (
    <div className={classes.app}>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            className={classes.colorSwatch}
            style={{ background: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;

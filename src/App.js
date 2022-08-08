import React, { useState, useMemo, useRef } from "react";
import useStyles from "./App.styles";
import Grid from "./Components/Grid";
import ColorPicker from "./Components/ColorPicker";
import html2canvas from "html2canvas";

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

  const gridRef = useRef();

  const handleClick = async () => {
    const element = gridRef.current();
    const capturedElement = await html2canvas(element);
    const data = capturedElement.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div className={classes.app}>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <div>
        <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
        <button onClick={handleClick}>Save</button>
      </div>
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

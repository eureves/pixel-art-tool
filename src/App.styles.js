import { createUseStyles } from "react-jss";
import { breakPoints } from "./breakPoints";

export default createUseStyles({
  app: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    [`@media (max-width: ${breakPoints.l})`]: {
      flexDirection: "column-reverse",
    },
  },
  colorSwatchContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100vh",
    [`@media (max-width: ${breakPoints.l})`]: {
      flexDirection: "row",
      height: "auto",
    },
  },
  colorSwatch: {
    padding: 0,
    width: "25px",
    height: "25px",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
});

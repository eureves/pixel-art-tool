import { createUseStyles } from "react-jss";
import { breakPoints } from "../breakPoints";

export default createUseStyles({
  grid: {
    display: "grid",
    gridTemplateRows: "repeat(10, 1fr)",
    gridTemplateColumns: "repeat(10, 1fr)",
    width: "900px",
    height: "900px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.65)",
    [`@media (max-width: ${breakPoints.l})`]: {
      width: "700px",
      height: "700px",
    },
    [`@media (max-width: ${breakPoints.s})`]: {
      width: "600px",
      height: "600px",
    },
    [`@media (max-width: ${breakPoints.xs})`]: {
      width: "350px",
      height: "350px",
    },
  },
  cell: {
    background: "white",
    transition: "0.1s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

import bodyColor from "./bodycolor.png";
import bodyColorConvertible from "./bodycolorconvertible.png";
import carbonFlashFull from "./carbonFlashFull.png";
import carbonFlashNacelles from "./carbonFlashNacelles.png";
import transparent from "./transparent.png";
import visiblecarbonfiber from "./visiblecarbonfiber.png";

const roofs = [
  { name: "BodyColor", src: bodyColor, convertible: false, price: "$500" },
  {
    name: "BodyColorConvertible",
    src: bodyColorConvertible,
    convertible: true,
    price: "$750",
  },
  {
    name: "CarbonFlashFull",
    src: carbonFlashFull,
    convertible: false,
    price: "$1000",
  },
  {
    name: "CarbonFlashNacelles",
    src: carbonFlashNacelles,
    convertible: false,
    price: "$1000",
  },
  { name: "Transparent", src: transparent, convertible: true, price: "$1000" },
  {
    name: "VisibleCarbonFiber",
    src: visiblecarbonfiber,
    convertible: true,
    price: "$1000",
  },
];

export default roofs;

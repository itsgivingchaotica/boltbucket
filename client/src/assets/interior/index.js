import adrenalineRed from "./adrenalineRed.png";
import adrenalineRedDipped from "./adrenalineRedDipped.png";
import adrenalineRedInteriorBlackSeat from "./adrenalineRedInteriorBlackSeat.png";
import jetBlack from "./jetBlack.png";
import jetBlackInteriorGraySeat from "./jetBlackInteriorGraySeat.png";
import jetBlackInteriorRedSeat from "./jetBlackInteriorRedSeat.png";
import jetBlackYellowStitching from "./jetBlackYellowStitching.png";
import natural from "./natural.png";
import naturalDipped from "./naturalDipped.png";
import skyCoolGray from "./skyCoolGray.png";
import skyCoolGrayBlackSeat from "./skyCoolGrayBlackSeat.png";
import twoToneBlue from "./twoToneBlue.png";

const interior = [
  {
    name: "AdrenalineRed",
    src: adrenalineRed,
    convertible: false,
    price: "$1000",
  },
  {
    name: "AdrenalineRedDipped",
    src: adrenalineRedDipped,
    convertible: false,
    price: "$1000",
  },
  {
    name: "AdrenalineRedInteriorBlackSeat",
    src: adrenalineRedInteriorBlackSeat,
    convertible: false,
    price: "$2500",
  },
  { name: "JetBlack", src: jetBlack, convertible: false, price: "$1000" },
  {
    name: "JetBlackInteriorGraySeat",
    src: jetBlackInteriorGraySeat,
    convertible: false,
    price: "$2000",
  },
  {
    name: "JetBlackInteriorRedSeat",
    src: jetBlackInteriorRedSeat,
    convertible: false,
    price: "$2500",
  },
  {
    name: "JetBlackYellowStitching",
    src: jetBlackYellowStitching,
    convertible: false,
    price: "$1000",
  },
  { name: "Natural", src: natural, convertible: false, price: "$1000" },
  {
    name: "NaturalDipped",
    src: naturalDipped,
    convertible: false,
    price: "$1000",
  },
  { name: "SkyCoolGray", src: skyCoolGray, convertible: false, price: "$1000" },
  {
    name: "SkyCoolGrayBlackSeat",
    src: skyCoolGrayBlackSeat,
    convertible: true,
    price: "$2500",
  },
  { name: "TwoToneBlue", src: twoToneBlue, convertible: false, price: "$1200" },
];

export default interior;

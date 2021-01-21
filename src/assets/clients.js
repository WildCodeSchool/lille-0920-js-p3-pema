import alimakek from "./images/clients/alimakek.png";
import cacom from "./images/clients/cacom.png";
import cif from "./images/clients/cif.png";
import clariant from "./images/clients/clariant.png";
import csgroup from "./images/clients/cs-group.png";
import dekra from "./images/clients/dekra.png";
import elivia from "./images/clients/elivia.png";
import gaultfremont from "./images/clients/gault-fremont.png";
import lagglo from "./images/clients/lagglo.jpeg";
import legendre from "./images/clients/legendre.png";
import locapal from "./images/clients/locapal.gif";
import nes from "./images/clients/nes.png";
import peg from "./images/clients/peg.jpeg";
import sophartex from "./images/clients/sophartex.jpeg";
import unither from "./images/clients/unither.png";

export const myClients = [
  {
    id: 1,
    name: "Pharmacie",
    logos: [
      { src: sophartex, alt: "sophartex" },
      { src: unither, alt: "unither" },
    ],
  },
  {
    id: 2,
    name: "Construction",
    logos: [
      { src: legendre, alt: "legendre" },
      { src: alimakek, alt: "alimakek" },
      { src: locapal, alt: "locapal" },
    ],
  },
  {
    id: 3,
    name: "IT",
    logos: [
      { src: csgroup, alt: "csgroup" },
      { src: cacom, alt: "cacom" },
    ],
  },
  {
    id: 4,
    name: "Services",
    logos: [
      { src: dekra, alt: "dekra" },
      { src: nes, alt: "nes" },
      { src: cif, alt: "cif" },
      { src: lagglo, alt: "lagglo" },
    ],
  },
  {
    id: 5,
    name: "Industries",
    logos: [
      { src: peg, alt: "peg" },
      { src: gaultfremont, alt: "gaultfremont" },
      { src: clariant, alt: "clariant" },
    ],
  },
  {
    id: 6,
    name: "Agro-alimentaire",
    logos: [{ src: elivia, alt: "elivia" }],
  },
];

import { Reset } from "styled-reset";

import Header from "./Components/Header/Header";
import Timeline from "./Components/Timeline/Timeline";
import Chapters from "./Components/Chapters/Chapters";
import Partners from "./Components/Partners/Partners";
import Testimonies from "./Components/Testimonies/Testimonies";

export default function App() {
  return (
    <div className="app">
      <Reset />
      <Header />
      <Timeline />
      <Chapters />
      <Testimonies />
      <Partners />
    </div>
  );
}

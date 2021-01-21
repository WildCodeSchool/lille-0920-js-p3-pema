import Partners from "./Components/Partners/Partners";
import Timeline from "./Components/Timeline/Timeline";

import { Reset } from "styled-reset";
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <div className="app">
      <Reset />
      <Header />
      <Timeline />
      <Partners />
    </div>
  );
}

import Partners from "./Components/Partners/Partners";
import Timeline from "./Components/Timeline/Timeline";

import { Reset } from "styled-reset";

export default function App() {
  return (
    <div className="app">
      <Reset />
      <Timeline />
      <Partners />
    </div>
  );
}

import Partners from "./Components/Partners";
import Header from "./Components/Header/Header";
import Timeline from "./Components/Timeline/Timeline";
import { Reset } from "styled-reset";

export default function App() {
  return (
    <>
      <Reset />
      <Header />
      <Timeline />
      <Partners />
    </>
  );
}

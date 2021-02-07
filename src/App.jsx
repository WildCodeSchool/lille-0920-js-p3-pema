import { Reset } from "styled-reset";
import Header from "./Components/Header/Header";
import Timeline from "./Components/Timeline/Timeline";
import Chapters from "./Components/Chapters/Chapters";
import Testimonies from "./Components/Testimonies/Testimonies";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer/Footer";
import HeaderBar from "./Components/Header/HeaderBar";

export default function App() {
  return (
    <div className="app">
      <Reset />
      <HeaderBar />
      <Header />
      <Timeline />
      <Chapters />
      <Testimonies />
      <Partners />
      <Footer />
    </div>
  );
}

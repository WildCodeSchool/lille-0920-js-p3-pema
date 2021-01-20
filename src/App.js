import React, { useState } from "react";
import Chapters from "./components/Chapters";
import { Reset } from "styled-reset";
import ShortcutChapter from "./components/ShortcutChapter";
import { AppContainer, BackgroundColor } from "./styled-components/AppStyled";

export default function App() {
  const [openModal, setOpenModal] = useState({ modal: "id1" });
  const [displayShortcut, setDisplayShortcut] = useState(true);
  return (
    <BackgroundColor>
      <AppContainer>
        <Reset />
        <ShortcutChapter
          openModal={openModal}
          setOpenModal={setOpenModal}
          displayShortcut={displayShortcut}
          setDisplayShortcut={setDisplayShortcut}
        />
        <Chapters
          openModal={openModal}
          setOpenModal={setOpenModal}
          displayShortcut={displayShortcut}
          setDisplayShortcut={setDisplayShortcut}
        />
      </AppContainer>
    </BackgroundColor>
  );
}

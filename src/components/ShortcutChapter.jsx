import scrollToElement from "scroll-to-element";
import {
  ChapterTitle,
  HideShortcut,
  LogoHideShortcut,
  ShortcutChapterContainer,
  ShortcutContainer,
  ShortcutAndLogoContainer,
} from "../styled-components/ShortcutChapterStyled";

export default function ShortcutChapter({
  openModal,
  setOpenModal,
  displayShortcut,
  setDisplayShortcut,
}) {
  const scrollTo = () => {
    scrollToElement("#topOfPage", {
      offset: 0,
      ease: "out-circ",
      duration: 500,
    });
  };

  return (
    <ShortcutAndLogoContainer>
      <ShortcutContainer
        className={displayShortcut === false ? "hideShortcut" : "showShortcut"}
      >
        <ShortcutChapterContainer>
          <ChapterTitle
            onClick={() => {
              setOpenModal({ modal: "id1" });
              scrollTo();
            }}
            className={openModal.modal === "id1" ? "isClicked" : ""}
          >
            {displayShortcut === true ? "Inspiration" : " "}
          </ChapterTitle>
        </ShortcutChapterContainer>

        <ShortcutChapterContainer>
          <ChapterTitle
            onClick={() => {
              setOpenModal({ modal: "id2" });
              scrollTo();
            }}
            className={openModal.modal === "id2" ? "isClicked" : ""}
          >
            {displayShortcut === true ? "Carnet de voyage" : " "}
          </ChapterTitle>
        </ShortcutChapterContainer>

        <ShortcutChapterContainer>
          <ChapterTitle
            onClick={() => {
              setOpenModal({ modal: "id3" });
              scrollTo();
            }}
            className={openModal.modal === "id3" ? "isClicked" : ""}
          >
            {displayShortcut === true ? "Clients" : " "}{" "}
          </ChapterTitle>
        </ShortcutChapterContainer>
      </ShortcutContainer>
      <HideShortcut onClick={() => setDisplayShortcut(!displayShortcut)}>
        <LogoHideShortcut
          className="fas fa-chevron-circle-left"
          id={displayShortcut === false ? "rotateLeft" : "rotateRight"}
        ></LogoHideShortcut>
      </HideShortcut>
    </ShortcutAndLogoContainer>
  );
}

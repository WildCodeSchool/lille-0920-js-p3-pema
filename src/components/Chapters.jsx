import React, { useState, useEffect } from "react";
import {
  TabContainer,
  ChapterContainer,
  Chapter,
  BackgroundImageChapter,
  Modal,
  TabPage,
  BackgroundModal,
  Title,
  SchemaContainer,
  BackgroundColor,
  ShortcutChapter,
  ShortcutContainer,
  ChapterTitle,
} from "../styled-components/ChaptersStyled";
import Timeline from "./Timeline";
import tabl1 from "../assets/pictures/tabl1.png";
import tabl2 from "../assets/pictures/tabl2.png";
import tabl3 from "../assets/pictures/tabl3.png";
import schema1 from "../assets/pictures/schema1_chapter_1.png";
import schema2 from "../assets/pictures/schema2_chapitre_2.png";

function Chapters() {
  const [openModal, setOpenModal] = useState([
    { modal1: "", isActive: false },
    { modal2: "", isActive: false },
    { modal3: "", isActive: false },
  ]);

  const [isTabDisplay, setTabDisplay] = useState(false);

  const scrollTo = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  const displayTab = () => {
    if (window.scrollY > 500) {
      setTabDisplay(true);
    } else if (window.scrollY < 500) {
      setTabDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", displayTab);
    return () => {
      window.removeEventListener("scroll", displayTab);
    };
  });

  return (
    <BackgroundColor className={openModal.isActive === true ? "grow" : ""}>
      <TabPage>
        <ShortcutContainer
          className={isTabDisplay === true ? "displayShortcut" : "hideShortcut"}
        >
          <ShortcutChapter
            className={openModal.modal1 === "id1" ? "borderBlue" : ""}
          >
            <ChapterTitle
              onClick={() => {
                setOpenModal({ modal1: "id1", isActive: true });
                scrollTo();
              }}
              className={
                openModal.modal1 === "id1"
                  ? "backgroundBlue"
                  : "backgroundBlueOpacity"
              }
            >
              Chapitre 1
            </ChapterTitle>
          </ShortcutChapter>

          <ShortcutChapter
            className={openModal.modal2 === "id2" ? "borderGold" : ""}
          >
            <ChapterTitle
              onClick={() => {
                setOpenModal({ modal2: "id2", isActive: true });
                scrollTo();
              }}
              className={
                openModal.modal2 === "id2"
                  ? "backgroundGold"
                  : "backgroundGoldOpacity"
              }
            >
              Chapitre 2
            </ChapterTitle>
          </ShortcutChapter>

          <ShortcutChapter
            className={openModal.modal3 === "id3" ? "borderRed" : ""}
          >
            <ChapterTitle
              onClick={() => {
                setOpenModal({ modal3: "id3", isActive: true });
                scrollTo();
              }}
              className={
                openModal.modal3 === "id3"
                  ? "backgroundRed"
                  : "backgroundRedOpacity"
              }
            >
              Chapitre 3
            </ChapterTitle>
          </ShortcutChapter>
        </ShortcutContainer>
        <TabContainer>
          <ChapterContainer
            onClick={() => setOpenModal({ modal1: "id1", isActive: true })}
          >
            <BackgroundImageChapter
              className={openModal.modal1 === "id1" ? "borderBlue" : ""}
              src={tabl1}
            />
            <Chapter>Un voyage inédit au coeur de votre entreprise</Chapter>
          </ChapterContainer>

          <ChapterContainer
            onClick={() => setOpenModal({ modal2: "id2", isActive: true })}
          >
            <BackgroundImageChapter
              className={openModal.modal2 === "id2" ? "borderGold" : ""}
              src={tabl2}
            />
            <Chapter>Carnet de voyage pratique</Chapter>
          </ChapterContainer>

          <ChapterContainer
            onClick={() => setOpenModal({ modal3: "id3", isActive: true })}
          >
            <BackgroundImageChapter
              className={openModal.modal3 === "id3" ? "borderRed" : ""}
              src={tabl3}
            />
            <Chapter>Témoignages</Chapter>
          </ChapterContainer>
        </TabContainer>
        <BackgroundModal
          className={openModal.modal1 === "id1" ? "borderBlue" : ""}
        >
          <Modal className={openModal.modal1 === "id1" ? "visible" : "hidden"}>
            <Title>
              Chapitre 1 : Un voyage inédit au coeur de votre entreprise
            </Title>
            <p>
              Les problèmes, les défis, les challenges, sont autant
              d’opportunités pour découvrir ou redécouvrir les richesses
              insoupçonnées de votre entreprise.
              <br />
              <br />
              La principale d’entre elle est votre équipe.
              <br />
              <br />
              Trop souvent, « l’esprit d’équipe » est perdu. Pour diverses
              raisons : un management inapproprié, le travail en silos, les
              conflits d’intérêt, les déceptions, l’histoire de l’entreprise, le
              manque de sens…
              <br />
              <br />
              Lorsque l’esprit d’équipe est retrouvé, les motivations
              reviennent, les idées naissent, les initiatives fleurissent, la
              confiance et la solidarité se développent. Les problèmes et les
              défis sont portés par toute l’équipe et plus seulement par son
              dirigeant ou quelques managers.
              <br />
              <br />
              Vos processus deviennent plus simples, plus robustes, plus agiles.
              Des résultats émergent rapidement.
              <br />
              <br />
              Le cercle vertueux se met en place. La culture de l’entreprise
              change.
              <br />
              <br />
            </p>
            <SchemaContainer>
              <img src={schema1} alt="schéma motivation entreprise" />
            </SchemaContainer>
            <p>
              <br />
              <br />
              La première fois que nous avons déployé un projet de
              transformation ainsi, nous étions animés par des convictions un
              peu naïves, pour ne pas dire « bisounours », et il est légitime de
              penser qu’il peut en être ainsi.
              <br />
              <br />
              Mais nous sommes fiers des résultats qui en ont découlés chez nos
              clients. Nous sommes fiers d’avoir redécouvert que les choses les
              plus simples sont les plus efficaces. Nous sommes fiers de
              remettre l’humain au cœur de l’entreprise et de sa performance.
              <br />
              <br />
              Une question demeure : comment fait-on ? Par où commencer ? En
              préparant son carnet de voyage ! Bien sûr.
            </p>
          </Modal>
        </BackgroundModal>

        <BackgroundModal
          className={openModal.modal2 === "id2" ? "borderGold" : ""}
        >
          <Modal className={openModal.modal2 === "id2" ? "visible" : "hidden"}>
            <Title>
              Chapitre 2 : Carnet de voyage
              <br />
              Que dire ?
            </Title>
            <br />
            <br />
            <p>
              Si chaque entreprise est unique, son voyage sera aussi unique.
              Mais il y a des points de passage obligés. Des leviers importants.
              Ils sont au nombre de 4.
              <br />
              <br />
            </p>
            <SchemaContainer>
              <img src={schema2} alt="vision d'entreprise" />
            </SchemaContainer>
            <p>
              <br />
              <br />
              Sans doute avez-vous déjà entendu parler de tout cela ?
              <br />
              Sans doute avez-vous le sentiment que vous connaissez ces leviers
              et que vous les avez déjà essayés ?
              <br />
              Sans doute avez-vous une bonne vision, une bonne stratégie pour
              votre entreprise ?
              <br />
              Sans doute avez-vous à maintes reprises essayé de vous appuyer sur
              vos équipes ? Sans succès…
              <br />
              Sans doute estimez-vous que votre manière de manager est la seule
              qui soit efficace pour votre entreprise.
              <br />
              Enfin, peut-être avez-vous déjà essayé d’être accompagné par un
              consultant brillant, ou avez-vous déjà financé des formations au
              management, au leadership… pour quels résultats ?
              <br />
              <br />
              Vous avez raison. Rien de nouveau sous le soleil.
              <br />
              <br />
            </p>
            <Title> Qu’aurions-nous de différent ?</Title>
            <Timeline />
          </Modal>
        </BackgroundModal>

        <BackgroundModal
          className={openModal.modal3 === "id3" ? "borderRed" : ""}
        >
          <Modal className={openModal.modal3 === "id3" ? "visible" : "hidden"}>
            <Title>Chapitre 3 : Souvenir du voyage</Title>
            <p>
              Quelques exemples valent mieux qu'un long discours, n'est-ce pas ?
              <br />
              <br />
            </p>
            <SchemaContainer>
              <img
                src="https://via.placeholder.com/1250x500?text=Place+carrousel+here"
                alt="carrousel"
              />
            </SchemaContainer>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
              tenetur! Aut facere soluta enim possimus, officiis labore totam
              repellat qui omnis consequuntur corporis similique iure dicta
              impedit ullam id ipsum.
            </p>
          </Modal>
        </BackgroundModal>
      </TabPage>
    </BackgroundColor>
  );
}

export default Chapters;

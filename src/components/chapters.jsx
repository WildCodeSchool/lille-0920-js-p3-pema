import React, { useState } from "react";
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
} from "../styled-components/ChaptersStyled";
import tabl1 from "../assets/pictures/tabl1.png";
import tabl2 from "../assets/pictures/tabl2.png";
import tabl3 from "../assets/pictures/tabl3.png";
import schema1 from "../assets/pictures/schema1_chapter_1.png";
import schema2 from "../assets/pictures/schema2_chapitre_2.png";

function Chapters() {
  const [openModal, setOpenModal] = useState([
    { modal1: "id1", isActive: false },
    { modal2: "id2", isActive: false },
    { modal3: "id3", isActive: false },
  ]);

  return (
    <BackgroundColor className={openModal.isActive === true ? "grow" : ""}>
      <TabPage>
        <TabContainer>
          <ChapterContainer onClick={() => setOpenModal({modal1:"id1", isActive: true})}>
            <BackgroundImageChapter
              className={openModal.modal1 === "id1" ? "borderBlue" : ""}
              src={tabl1}
            />
            <Chapter>Un voyage inédit au coeur de votre entreprise</Chapter>
          </ChapterContainer>

          <ChapterContainer onClick={() => setOpenModal({modal2:"id2", isActive: true})}>
            <BackgroundImageChapter
              className={openModal.modal2 === "id2" ? "borderGold" : ""}
              src={tabl2}
            />
            <Chapter>Carnet de voyage pratique</Chapter>
          </ChapterContainer>

          <ChapterContainer onClick={() => setOpenModal({modal3:"id3", isActive: true})}>
            <BackgroundImageChapter
              className={openModal.modal3 === "id3" ? "borderRed" : ""}
              src={tabl3}
            />
            <Chapter>Témoignages</Chapter>
          </ChapterContainer>
        </TabContainer>
        <BackgroundModal className={openModal.modal1 === "id1" ? "borderBlue" : ""}>
          <Modal className={openModal.modal1 === "id1" ? "visible" : "hidden"}>
            <Title>
              Chapitre 1 : Un voyage inédit au coeur de votre entreprise
            </Title>
            Les problèmes, les défis, les challenges, sont autant d’opportunités
            pour découvrir ou redécouvrir les richesses insoupçonnées de votre
            entreprise. La principale d’entre elle est votre équipe.
            <br />
            <br />
            Trop souvent, « l’esprit d’équipe » est perdu. Pour diverses raisons
            : un management inapproprié, le travail en silos, les conflits
            d’intérêt, les déceptions, l’histoire de l’entreprise, le manque de
            sens… Lorsque l’esprit d’équipe est retrouvé, les motivations
            reviennent, les idées naissent, les initiatives fleurissent, la
            confiance et la solidarité se développent.
            <br />
            <br />
            Les problèmes et les défis sont portés par toute l’équipe et plus
            seulement par son dirigeant ou quelques managers. Vos processus
            deviennent plus simples, plus robustes, plus agiles. Des résultats
            émergent rapidement. Le cercle vertueux se met en place. La culture
            de l’entreprise change.
            <br />
            <br />
            <SchemaContainer>
              <img src={schema1} alt="schéma motivation entreprise" />
            </SchemaContainer>
            <br />
            <br />
            schema2
            <br />
            Mais nous sommes fiers des résultats qui en ont découlés chez nos
            clients. Nous sommes fiers d’avoir redécouvert que les choses les
            plus simples sont les plus efficaces. Nous sommes fiers de remettre
            l’humain au cœur de l’entreprise et de sa performance.
            <br />
            <br />
            Une question demeure : comment fait-on ? Par où commencer ? En
            préparant son carnet de voyage ! Bien sûr.
          </Modal>
        </BackgroundModal>

        <BackgroundModal className={openModal.modal2 === "id2" ? "borderGold" : ""}>
          <Modal className={openModal.modal2 === "id2" ? "visible" : "hidden"}>
            <Title>Chapitre 2 : Carnet de voyage</Title>
            Que dire ?
            <br />
            <br />
            Si chaque entreprise est unique, son voyage sera aussi unique. Mais
            il y a des points de passage obligés. Des leviers importants. Ils
            sont au nombre de 4.
            <br />
            <br />
            <SchemaContainer>
              <img src={schema2} alt="vision d'entreprise" />
            </SchemaContainer>
            <br />
            <br />
            Sans doute avez-vous déjà entendu parler de tout cela ?
            <br />
            <br />
            Sans doute avez-vous le sentiment que vous connaissez ces leviers et
            que vous les avez déjà essayés ?
            <br />
            <br />
            Sans doute avez-vous une bonne vision, une bonne stratégie pour
            votre entreprise ?
            <br />
            <br />
            Sans doute avez-vous à maintes reprises essayé de vous appuyer sur
            vos équipes ? Sans succès…
            <br />
            <br />
            Sans doute estimez-vous que votre manière de manager est la seule
            qui soit efficace pour votre entreprise.
            <br />
            <br />
            Enfin, peut-être avez-vous déjà essayé d’être accompagné par un
            consultant brillant, ou avez-vous déjà financé des formations au
            management, au leadership… pour quels résultats ?
            <br />
            <br />
            Vous avez raison. Rien de nouveau sous le soleil.
            <br />
            <br />
            <br />
            <br />
            Qu’aurions-nous de différent ?
          </Modal>
        </BackgroundModal>

        <BackgroundModal className={openModal.modal3 === "id3" ? "borderRed" : ""}>
          <Modal className={openModal.modal3 === "id3" ? "visible" : "hidden"}>
            <Title>Chapitre 3 : Souvenir du voyage</Title>
            Quelques exemples valent mieux qu'un long discours, n'est-ce pas ?
            <br />
            <br />
            <SchemaContainer>
              <img
                id="carrousel"
                src="https://via.placeholder.com/1150x500?text=Place+carrousel+here"
                alt="carrousel"
              />
            </SchemaContainer>
          </Modal>
        </BackgroundModal>
      </TabPage>
    </BackgroundColor>
  );
}

export default Chapters;

import { useState, useEffect } from "react";
import {
  Logo,
  TagLine,
  LogoAndTagLine,
  HeaderBarStyled,
} from "../../styled-components/Header/Header";
import logo from "../../assets/images/logo.png";
import Sidebar from "./Sidebar";

export default function HeaderBar() {
  const [isHeaderSticky, setHeaderSticky] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const displayHeaderBar = () => {
    const startPointChapters = document.getElementById("chapters").offsetTop;
    if (window.scrollY > startPointChapters) {
      setHeaderSticky(true);
    } else if (window.scrollY < startPointChapters) {
      setHeaderSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", displayHeaderBar);
  }, [setHeaderSticky]);

  return (
    <HeaderBarStyled className={isHeaderSticky ? "sticky" : "absolute"}>
      <LogoAndTagLine>
        <Logo src={logo} alt="logo pema consulting" />
        <TagLine>Un voyage inédit au coeur de votre entreprise</TagLine>
      </LogoAndTagLine>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </HeaderBarStyled>
  );
}

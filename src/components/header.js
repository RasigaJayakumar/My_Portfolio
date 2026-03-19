import React, { useState, useEffect } from "react";
import {
  Header_Container,
  Header_Title,
  Header_Pages,
  Header_Buttons_Section,
  Header_Nav_Buttons,
  Header_Theme_Button,
  Header_Theme,
} from "@/styles/header";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // trigger after 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pagesDetials = [
    { name: "Home" },
    { name: "About" },
    { name: "Skills" },
    { name: "Experience" },
    { name: "Blogs" },
    { name: "Contact" },
  ];
  return (
    <Header_Container scrolled={scrolled}>
      <Header_Title>Rasiga Jayakumar</Header_Title>
      <Header_Buttons_Section>
        <Header_Pages>
          {pagesDetials.map((page, index) => {
            return (
              <Header_Nav_Buttons key={index}>{page?.name}</Header_Nav_Buttons>
            );
          })}
        </Header_Pages>
        <Header_Theme>
          <Header_Theme_Button onClick={toggleTheme}>
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </Header_Theme_Button>
        </Header_Theme>
      </Header_Buttons_Section>
    </Header_Container>
  );
}

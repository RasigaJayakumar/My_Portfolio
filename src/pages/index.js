import About from "@/components/about";
import Blogs from "@/components/blogs";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // padding-top: 70px;

  h1 {
    font-size: 3rem;
  }
`;

const Container_Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.header};
  flex-direction: column;
`;

export default function Home() {
  return (
    <Container>
      <Container_Wrapper>
        <Hero />
        <About />
        {/* <Skills />
        <Experience />
        <Blogs />
        <Contact /> */}
        <Footer />
      </Container_Wrapper>
    </Container>
  );
}

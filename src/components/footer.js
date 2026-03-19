import {
  Footer_Container,
  Footer_Title,
  Footer_Navs,
  Footer_Pages,
  Footer_Social,
  Footer_Contact,
  Footer_Mail,
  Footer_Mobile,
  Footer_Rights,
  Footer_Rights_Line,
  Footer_Rights_Text,
} from "@/styles/footer";

export default function Footer() {
  const pagesDetials = [
    { name: "Home" },
    { name: "About" },
    { name: "Skills" },
    { name: "Experience" },
    { name: "Blogs" },
    { name: "Contact" },
  ];
  return (
    <Footer_Container>
      <Footer_Title>Rasiga Jayakumar</Footer_Title>
      <Footer_Navs>
        {pagesDetials.map((page, index) => {
          return <Footer_Pages key={index}>{page?.name}</Footer_Pages>;
        })}
      </Footer_Navs>
      <Footer_Social>
        <span>git</span>
        <span>LinkedIn</span>
      </Footer_Social>
      <Footer_Contact>
        <Footer_Mail>rasigajkr@gmail.com</Footer_Mail>
        <Footer_Mobile>+91 7010594411</Footer_Mobile>
      </Footer_Contact>
      <Footer_Rights>
        <Footer_Rights_Line></Footer_Rights_Line>
        <Footer_Rights_Text>
          <span>© 2026 Rasiga Jayakumar.All rights reserved.</span>
          <span>
            Designed & Built with ❤️ using Next.js & Styled Components
          </span>
        </Footer_Rights_Text>
      </Footer_Rights>
    </Footer_Container>
  );
}

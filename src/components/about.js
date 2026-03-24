import { About_Container } from "@/styles/about";
import CommonTitle from "./title";
export default function About() {
  return (
    <About_Container>
      <CommonTitle
        MainContent="About"
        ColorContent="Me"
        subTitle="Lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
      />
    </About_Container>
  );
}

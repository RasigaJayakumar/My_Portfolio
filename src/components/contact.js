import { Contact_Container } from "@/styles/contact";
import CommonTitle from "./title";

export default function Contact() {
  return (
    <Contact_Container>
      <CommonTitle
        MainContent="Ping"
        ColorContent="Me"
        subTitle="Lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
      />
    </Contact_Container>
  );
}

import { Blogs_Container } from "@/styles/blogs";
import CommonTitle from "./title";

export default function Blogs() {
  return (
    <Blogs_Container>
      <CommonTitle
        MainContent="My"
        ColorContent="Blogs"
        subTitle="Lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
      />
    </Blogs_Container>
  );
}

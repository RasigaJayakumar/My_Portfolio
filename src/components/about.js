import {
  About_Container,
  About_Wrapper,
  About_Card,
  About_Logo,
  About_Stack,
  About_Description,
} from "@/styles/about";
import CommonTitle from "./title";
export default function About() {
  const cardDetails = [
    {
      logo: "@",
      title: "Frontend Developer",
      description:
        "Design and implement scalable serverless architectures on AWS that scale to zero and cost nothing when idle.",
    },
    {
      logo: "+",
      title: "Frontend Developer",
      description:
        "Design and implement scalable serverless architectures on AWS that scale to zero and cost nothing when idle.",
    },
    {
      logo: "*",
      title: "Frontend Developer",
      description:
        "Design and implement scalable serverless architectures on AWS that scale to zero and cost nothing when idle.",
    },
    {
      logo: "&",
      title: "Frontend Developer",
      description:
        "Design and implement scalable serverless architectures on AWS that scale to zero and cost nothing when idle.",
    },
    {
      logo: "^",
      title: "Frontend Developer",
      description:
        "Design and implement scalable serverless architectures on AWS that scale to zero and cost nothing when idle.",
    },
    {
      logo: "%",
      title: "Frontend Developer",
      description:
        "Design and implement scalable serverless architectures on AWS that scale to zero and cost nothing when idle.",
    },
    {
      logo: "$",
      title: "Frontend Developer",
      description:
        "Design and implement scalable serverless architectures on AWS that scale to zero and cost nothing when idle.",
    },
    {
      logo: "#",
      title: "Frontend Developer",
      description:
        "Design and implement scalable serverless architectures on AWS that scale to zero and cost nothing when idle.",
    },
    {
      logo: "$",
      title: "Frontend Developer",
      description:
        "Design and implement scalable serverless architectures on AWS that scale to zero and cost nothing when idle.",
    },
  ];
  return (
    <About_Container>
      <CommonTitle
        MainContent="About"
        ColorContent="Me"
        subTitle="Lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
      />
      <About_Wrapper>
        {cardDetails?.map((data, index) => {
          return (
            <About_Card key={index}>
              <About_Logo>{data?.logo}</About_Logo>
              <About_Stack>{data?.title}</About_Stack>
              <About_Description>{data?.description}</About_Description>
            </About_Card>
          );
        })}
      </About_Wrapper>
    </About_Container>
  );
}
